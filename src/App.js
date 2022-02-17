import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Ricky" animal="Dog" breed="Jack Russell" />
      <Pet name="Chloe" animal="Cat" breed="Tabby" />
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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
