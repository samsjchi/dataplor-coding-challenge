import React from "react";

interface CounterProps {
  name: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const headingStyles = {
  margin: "0 0 20px 0",
};

const buttonStyles = {
  padding: "7px 15px",
  fontSize: "20px",
  cursor: "pointer",
};

const Counter: React.FC<CounterProps> = ({
  name,
  value,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="counter">
      <h2 style={headingStyles}>{name}</h2>
      <button style={buttonStyles} onClick={onDecrement}>
        -
      </button>
      <span
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        {value}
      </span>
      <button style={buttonStyles} onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

export default React.memo(Counter);
