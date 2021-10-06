import React, { useState } from 'react';

function CustomerDashboard() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me Customer 
      </button>
    </div>
  );
}

export default CustomerDashboard;