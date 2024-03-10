import AbstractComponent from "./AbstractComp";
import Counter from "./Counter";

import { movies, songs, products } from "./data";

export default function App() {
  return (
    <main>
      <AbstractComponent name="Movies" array={movies} />
      <AbstractComponent name="Songs" array={songs} />
      <AbstractComponent name="Products" array={products} />
      {/* data passed as an attribute is received as a first parameter as object usually called as prop use them as configuration/data fot your component */}
      <Counter />
    </main>
  );
}
