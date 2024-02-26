import React, { useCallback, useState } from "react";
import Counter from "./Counter";
import TrafficLight from "./TrafficLight";

const counterContainerStyles = {
  border: "1px solid black",
  borderRadius: "20px",
  marginBottom: "20px",
  padding: "20px",
  width: "250px",
};

const App: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  const incrementClicks = useCallback(() => {
    setTotalClicks((totalClicks) => totalClicks + 1);
  }, []);

  const handleIncrement1 = useCallback(() => {
    setCount1((count1) => count1 + 1);
    incrementClicks();
  }, []);

  const handleDecrement1 = useCallback(() => {
    setCount1((count1) => {
      if (count1 > 0) {
        incrementClicks();
        return count1 - 1;
      } else {
        return count1;
      }
    });
  }, []);

  const handleIncrement2 = useCallback(() => {
    setCount2((count2) => count2 + 1);
    incrementClicks();
  }, []);

  const handleDecrement2 = useCallback(() => {
    setCount2((count2) => {
      if (count2 > 0) {
        incrementClicks();
        return count2 - 1;
      } else {
        return count2;
      }
    });
  }, []);

  return (
    <div className="App">
      <div style={counterContainerStyles}>
        <Counter
          name="Counter 1"
          value={count1}
          onIncrement={handleIncrement1}
          onDecrement={handleDecrement1}
        />
        <TrafficLight
          state={{
            value: count1,
            label: "Traffic light controlled by Counter 1",
          }}
        />
      </div>
      <div style={counterContainerStyles}>
        <Counter
          name="Counter 2"
          value={count2}
          onIncrement={handleIncrement2}
          onDecrement={handleDecrement2}
        />
      </div>
      <h2>Total Clicks: {totalClicks}</h2>
    </div>
  );
};

export default App;
