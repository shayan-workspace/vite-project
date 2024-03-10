export default function AbstractComponent(props) {
  const { name, array } = props;

  return (
    <section>
      <h2>{name}</h2>
      <ul>
        {array.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </section>
  );
  // map method is used to loop through the array and return a new array with the same length and may be different values
}

const numbers = [1, 2, 3, 4, 5];

let sqNumbers = [];
numbers.forEach((number) => sqNumbers.push(number * 2));

const cubedNumbers = numbers.map((number) => {
  return number * 3;
});

const numbersGreaterThanThree = numbers.filter((number) => {
  return number > 3;
});
