import React from "react";

interface TrafficLightState {
  value: number;
  label: string;
}

interface TrafficLightProps {
  state: TrafficLightState;
}

const TrafficLight: React.FC<TrafficLightProps> = ({ state }) => {
  // Cycle through 0 = red, 1 = yellow, 2 = green
  const getColor = (value: number): string => {
    const colors = ["red", "yellow", "green"];
    return colors[value % 3];
  };

  return (
    <div
      className="traffic-light"
      style={{ display: "block", marginTop: "20px" }}
    >
      <div
        style={{
          width: "75px",
          height: "75px",
          backgroundColor: getColor(state.value),
          borderRadius: "50%",
        }}
      />
      <p style={{ margin: "20px 0 0" }}>{state.label}</p>
    </div>
  );
};

export default React.memo(TrafficLight);
