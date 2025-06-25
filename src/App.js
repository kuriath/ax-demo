import React, { useState } from 'react';

function App() {
  const [lanes, setLanes] = useState('');
  const [created, setCreated] = useState(null);

  const handleChange = (e) => {
    setLanes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCreated(lanes);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="lanes">How many lanes: </label>
        <input
          id="lanes"
          type="number"
          value={lanes}
          onChange={handleChange}
          min="1"
          required
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Create</button>
      </form>
      {created !== null && (
        <p style={{ marginTop: '20px' }}>Created {created} lanes</p>
      )}
    </div>
  );
}

export default App;
