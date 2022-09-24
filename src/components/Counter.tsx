import React, { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className={classes.container}>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
