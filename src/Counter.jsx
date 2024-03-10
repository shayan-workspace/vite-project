import { useEffect, useState } from "react";

export default function Counter() {
  // useState is a hook that returns an array with two elements to manage the state of the component which make is easy to manage the dom
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // javascript which is not related to react it gives more control over the component lifecycle
  useEffect(() => {
    console.log("Component Mounted or Dependent State Updated");

    return () => {
      console.log("Unmounting Counter");
    };
  }, [count]);
  // undefied === rerun the effect whenever the component is mounted or the state is updated
  // [] === run the effect only once when the component is mounted
  // [count] === run the effect whenever the component is mounted or the count state is updated
  // return a function to run some code when the component is unmounted

  // {} use this to go in javascript mode
  return (
    <section>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          setCount((currentCount) => currentCount + 1);
          setCount((currentCount) => currentCount + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          // setCount(count - 1);
          setCount2(100);
        }}
      >
        Decrement
      </button>
    </section>
  );
}
