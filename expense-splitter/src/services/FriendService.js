const FriendService = {
  getFriends: () => {
    const friends = localStorage.getItem("friends");
    return friends ? JSON.parse(friends) : [];
  },

  addFriend: (friend) => {
    const friends = FriendService.getFriends();
    friends.push(friend);
    localStorage.setItem("friends", JSON.stringify(friends));
  },

  removeFriend: (id) => {
    let friends = FriendService.getFriends();
    friends = friends.filter(friend => friend.id !== id);
    localStorage.setItem("friends", JSON.stringify(friends));
  }
};

export default FriendService;