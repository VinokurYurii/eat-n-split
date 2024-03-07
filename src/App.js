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
  const [showAddFriends, setShowAddFriends] = useState(false)

  function handleShowAddFriends() {
    setShowAddFriends(show => !show);
  }

  function handleAddFriend(newFriend) {
    setFriends((f) => [...f, newFriend])
    setShowAddFriends(false);
  }

  return <div className="app">
    <div className="sidebar">
      <FriendsList initialFriends={friends}/>
      <FormAddFriend showAddFriends={showAddFriends} onAddFriend={handleAddFriend} />
      <Button onClick={handleShowAddFriends}>{showAddFriends ? "Close" : "Add Friend"}</Button>
    </div>
    <FormSplitBill />
  </div>
}