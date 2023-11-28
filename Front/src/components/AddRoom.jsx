import { useState } from 'react';
import '../css/AddRoom.css';

const AddRoom = () => {
  const [roomName, setRoomName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');

  const handleAddRoom = () => {
    // Handle logic to add room
    console.log('Room Name:', roomName);
    console.log('Description:', description);
    console.log('Type:', type);
    console.log('Price:', price);
    // Add your logic here to send this data to your backend or perform other actions
  };

  return (
    <div className="add-room-container">
      <h2>Add Room</h2>
      <form>
        <label htmlFor="roomName">Room Name:</label>
        <input
          type="text"
          id="roomName"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="button" onClick={handleAddRoom}>
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
