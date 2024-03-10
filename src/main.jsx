import { createRoot } from "react-dom/client";

import App from "./App.jsx";

const main = document.getElementById("app");
const root = createRoot(main);
root.render(<App />);
