import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../Services/tweetsAPI';

export function Tweets() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  const handleFollow = (userId) => {
    const updatedUsers = users.map(user => {
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

    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>Tweets</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>Name: {user.user}</p>
          <p>Tweets: {user.tweets}</p>
          <img src={user.avatar} alt={user.user} />
          <p>Followers: {user.followers}</p>
          <button
            type="submit"
            onClick={() => handleFollow(user.id)}
          >
            {user.isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>
      ))}
    </div>
  );
}
