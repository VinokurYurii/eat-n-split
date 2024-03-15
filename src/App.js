import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";
import {useState} from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriends, setShowAddFriends] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriends() {
    setShowAddFriends(show => !show);
  }

  function handleAddFriend(newFriend) {
    setFriends((f) => [...f, newFriend])
    setShowAddFriends(false);
  }

  function handleFriendSelect(friend) {
    const newSelected = selectedFriend?.id === friend.id ? null : friend;
    setSelectedFriend(newSelected);
    setShowAddFriends(false);
  }

  function updateFriendBalance(fr, value) {
    return {
      ...fr,
      balance: fr.balance + value
    }
  }
  function handleSplitBill(value) {
    const updatedFriends = friends.map(friend => friend.id === selectedFriend.id ? updateFriendBalance(friend, value) : friend)

    setFriends(updatedFriends);
    setSelectedFriend(null);
  }

  return <div className="app">
    <div className="sidebar">
      <FriendsList
        initialFriends={friends}
        onFriendSelect={handleFriendSelect}
        selectedFriend={selectedFriend}
      />
      <FormAddFriend
        showAddFriends={showAddFriends}
        onAddFriend={handleAddFriend}
      />
      <Button
        onClick={handleShowAddFriends}
      >
        {showAddFriends ? "Close" : "Add Friend"}
      </Button>
    </div>
    {selectedFriend && <FormSplitBill
      selectedFriend={selectedFriend}
      onSplitBill={handleSplitBill}
      key={selectedFriend.id}
    />}
  </div>
}