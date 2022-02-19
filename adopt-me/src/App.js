import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

// const App = () => {
//   return React.createElement("div", { id: "my-brand" }, [
//     React.createElement("h1", {}, "Adopt me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Ricky",
//       animal: "Dog",
//       breed: "Jack Russell",
//     }),
//     React.createElement(Pet, { name: "Chloe", animal: "Cat", breed: "Tabby" }),
//   ]);
// };
ReactDOM.render(<App />, document.getElementById("root"));
