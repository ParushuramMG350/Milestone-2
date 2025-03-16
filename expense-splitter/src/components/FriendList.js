import React, { useState } from "react";
import "./FriendList.css";

const FriendList = ({ friends, setFriends }) => {
  const [name, setName] = useState("");

  const addFriend = () => {
    if (name.trim() && !friends.some(friend => friend.name === name)) {
      setFriends([...friends, { id: Date.now(), name }]);
      setName("");
    }
  };

  const removeFriend = (id) => {
    setFriends(friends.filter(friend => friend.id !== id));
  };

  return (
    <div className="friend-list">
      <h2>Friends</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter friend's name"
      />
      <button onClick={addFriend}>Add Friend</button>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>
            {friend.name} 
            <button onClick={() => removeFriend(friend.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;