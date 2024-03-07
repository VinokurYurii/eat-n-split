import Button from "./Button";
import {useState} from "react";

export default function FormSplitBill({selectedFriend}) {
  const [bill, setBill] = useState(0);
  const [paidByUser,  setPaidByUser] =  useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState('user');
  const paidByFriend = bill ? bill - paidByUser : '';

  function handleSetPaidByUser(value) {
    const correctPaid = value <= bill ? value : paidByUser;
    setPaidByUser(correctPaid);
  }

  return <form className="form-split-bill">
    <h2>Split a bill with {selectedFriend.name}</h2>

    <label>Bill value</label>
    <input
      type="text"
      value={bill}
      onChange={(e) => setBill(Number(e.target.value))}
    />

    <label>Your expense</label>
    <input
      type="text"
      value={paidByUser}
      onChange={(e) => handleSetPaidByUser(Number(e.target.value))}
    />

    <label>{selectedFriend.name}'s expense</label>
    <input
      type="text"
      value={paidByFriend}
      disabled
    />

    <label>Who is paying the bill?</label>
    <select value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
    >
      <option value='user'>You</option>
      <option value='friend'>{selectedFriend.name}</option>
    </select>

    <Button>Split bill</Button>
  </form>
}