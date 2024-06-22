import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [count, setCount] = useState(value);

  const handleAdd = () => setCount(count + 1);

  const handledSubstract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handledReset = () => setCount(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{count}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handledSubstract}>-1</button>
      <button onClick={handledReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
