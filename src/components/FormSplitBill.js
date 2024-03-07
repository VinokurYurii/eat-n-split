import Button from "./Button";

export default function FormSplitBill({selectedFriend}) {
  return <form className="form-split-bill">
    <h2>Split a bill with {selectedFriend.name}</h2>

    <label>Bill value</label>
    <input type="text"/>

    <label>Your expense</label>
    <input type="text"/>

    <label>{selectedFriend.name}'s expense</label>
    <input type="text" disabled />

    <label>Who is paying the bill?</label>
    <select>
      <option value={0}>You</option>
      <option value={1}>{selectedFriend.name}</option>
    </select>

    <Button>Split bill</Button>
  </form>
}