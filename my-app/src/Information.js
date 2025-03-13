import { useState, useEffect } from "react";

const NumberCounter = ({ targetNumber, label, duration = 2000 }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let start = 1;
    const increment = Math.ceil(targetNumber / (duration / 10));
    const stepTime = Math.max(duration / (targetNumber / increment), 1);
    
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= targetNumber) {
          clearInterval(interval);
          return targetNumber;
        }
        return prev + increment;
      });
    }, stepTime);
    return () => clearInterval(interval);
  }, [targetNumber, duration]);

  return (
    <div className="counter-item">
      <h1 className="counter">{count.toLocaleString()}</h1>
      <p className="counter-label">{label}</p>
    </div>
  );
};

const MultiCounter = () => {
  const numbers = [
    { value: 15000, label: "# sqft of areas" },
    { value: 320, label: "# mbps of internet speed" },
    { value: 255, label: "# of workstations" },
    { value: 35, label: "# of mentors" }
  ];

  return (
    <div className="multi-counter-container">
      {numbers.map((num, index) => (
        <NumberCounter key={index} targetNumber={num.value} label={num.label} duration={2000} className="multi-counter-container" />
      ))}
    </div>
  );
};

export default MultiCounter;
