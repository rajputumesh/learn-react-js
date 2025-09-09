import Header from "./components/Header";

function App() {
  const array = ["A", "B", "C", "D", "E", "F"];
  return (
    <div className="d-flex">
      {array.map((item) => (
        <Header item={item} />
      ))}
    </div>
  );
}

export default App;
