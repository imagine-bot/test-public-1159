import { useState } from 'react';

const ButtonWithCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={incrementCount}
    >
      Clicked {count} times
    </button>
  );
};

export default ButtonWithCounter;