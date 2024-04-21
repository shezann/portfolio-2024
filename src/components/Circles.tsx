import Circle from "./Circle.tsx";

const Circles = () => {
  return (
    <div>
      <Circle isSelected={true} />
      <Circle />
      <Circle />
      <Circle />
    </div>
  );
};

export default Circles;
