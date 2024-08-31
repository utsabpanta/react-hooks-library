import React from 'react';
import { useLocalStorage } from '../src';

const UseLocalStorageExample: React.FC = () => {
  const [name, setName] = useLocalStorage<string>('name', '');
  const [age, setAge] = useLocalStorage<number>('age', 0);

  return (
    <div>
      <h2>useLocalStorage Example</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="Enter your age"
        />
      </div>
      <p>
        Stored values: Name: {name}, Age: {age}
      </p>
      <p>These values will persist even after you refresh the page.</p>
    </div>
  );
};

export default UseLocalStorageExample;