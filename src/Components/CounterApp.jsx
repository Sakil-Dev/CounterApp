import React, { useState } from 'react';

function CounterApp() {
  // 2. Add State
  const [count, setCount] = useState(0);

  // 5. Conditional Display
  const getMessage = () => {
    if (count > 5) {
      return "You’ve gone above 5!";
    } else if (count < 0) {
      return "You’re in negative!";
    } else {
      return "Keep going!";
    }
  };

  // 3. Display the Counter
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Interactive Counter</h1>
      <p>Current Count: {count}</p>

      {/* 4. Add Buttons */}
      <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      {/* 5. Conditional Message */}
      <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{getMessage()}</p>
    </div>
  );
}

export default CounterApp;
