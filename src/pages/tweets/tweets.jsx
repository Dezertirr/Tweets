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
} from './tweets.styled'
import LogoGoIT from '../../images/Logo-GoIT.png'
import TopPhoto from '../../images/TopPhoto.png'

export function Tweets() {
  const [users, setUsers] = useState([]);

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

  return (
    <div>
      <h1>Tweets</h1>
      <TweetsList>
        {users.map(user => (
          <TweetsItem key={user.id}>
            <TweetsLogo src={LogoGoIT} alt='GoITLogo'></TweetsLogo>
            <TweetsTopPhoto src={TopPhoto} alt="Questions" />
            <TweetsPhoto src={user.avatar} alt={user.user} />
            <TweetsText>{user.tweets} Tweets </TweetsText>
            <TweetsText>{user.followers} Followers</TweetsText>
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
    </div>
  );
}
