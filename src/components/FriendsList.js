import Friend from "./Friend";

export default function FriendsList({initialFriends, onFriendSelect, selectedFriend}) {
  const friends = initialFriends;
  return <ul>
    {friends.map((friend) => (
      <Friend friend={friend}
              key={friend.id}
              onFriendSelect={onFriendSelect}
              selectedFriend={selectedFriend}
      />
    ))}
  </ul>
}