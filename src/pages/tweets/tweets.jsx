import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../Services/tweetsAPI';
import {
  TweetsList,
  TweetsItem,
  TweetsPhoto,
  TweetsLogo,
  TweetsTopPhoto,
  TweetsText,
  TweetsBtn,
  TweetsHorizontLine,
} from './tweets.styled';
import LogoGoIT from '../../images/Logo-GoIT.png';
import TopPhoto from '../../images/TopPhoto.png';
import LoadMore from './LoadMore/LoadMore';
import HorizontLine from '../../images/HorizontLine.png'

export function Tweets() {
  const [users, setUsers] = useState([]);
  const [visibleUsersCount, setVisibleUsersCount] = useState(3);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      fetchUsers()
        .then(data => setUsers(data))
        .catch(error => console.error(error));
    }
  }, []);

  const handleFollow = (userId) => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.map(user => {
        if (user.id === userId) {
          if (user.isFollowing) {
            return {
              ...user,
              followers: user.followers - 1,
              isFollowing: false
            };
          } else {
            return {
              ...user,
              followers: user.followers + 1,
              isFollowing: true
            };
          }
        }
        return user;
      });
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  const handleLoadMore = () => {
    setVisibleUsersCount(prevCount => prevCount + 3);
  };

  return (
    <div>
      <h1>Tweets</h1>
      <TweetsList>
        {users.slice(0, visibleUsersCount).map(user => (
          <TweetsItem key={user.id}>
            <TweetsLogo src={LogoGoIT} alt='GoITLogo'></TweetsLogo>
            <TweetsTopPhoto src={TopPhoto} alt="Questions" />
            <TweetsHorizontLine src={HorizontLine} ></TweetsHorizontLine>
            <TweetsPhoto src={user.avatar} alt={user.user} />
            <TweetsText>{user.tweets} Tweets </TweetsText>
            <TweetsText>{user.followers.toLocaleString('en-US')} Followers</TweetsText>

            <TweetsBtn
              type="submit"
              onClick={() => handleFollow(user.id)}
              style={{ backgroundColor: user.isFollowing ? '#5CD3A8' : '' }}
            >
              {user.isFollowing ? 'Following' : 'Follow'}
            </TweetsBtn>
          </TweetsItem>
        ))}
      </TweetsList>

      {visibleUsersCount < users.length && (
        <LoadMore onClick={handleLoadMore} />
      )}
    </div>
  );
}
