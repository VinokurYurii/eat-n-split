import Button from "./Button";
import {useState} from "react";

export default function FormAddFriend({showAddFriends, onAddFriend}) {
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !imgUrl) return;

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `https://i.pravatar.cc/48?u=${id}`,
      balance: 0,
      id
    }

    onAddFriend(newFriend);
  }

  return (showAddFriends && <form className="form-add-friend" onSubmit={handleSubmit}>
    <label>Friend name</label>
    <input type="text"
           value={name}
           onChange={(e) => setName(e.target.value)}
    />

    <label>Image URL</label>
    <input type="text"
           value={imgUrl}
           onChange={(e) => setImgUrl(e.target.value)}
    />

    <Button>Add</Button>
  </form>)
}