import Header from "./components/Header";

function App() {
  const array = [
    {
      title: "Watch",
      img: "",
      price: 500,
      mrp: 700,
    },
    {
      title: "Pen",
      img: "",
      price: 500,
      mrp: 700,
    },
    {
      title: "Shoes",
      img: "",
      price: 500,
      mrp: 700,
    },
    {
      title: "Belt",
      img: "",
      price: 500,
      mrp: 700,
    },
    {
      title: "Wallet",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a4wRSrGTFiRgquuMzhDxtMr5-PBmMCyhiA&s",
      price: 500,
      mrp: 700,
    },
    {
      title: "Bag",
      img: "",
      price: 500,
      mrp: 700,
    },
  ];

  const array2 = [
    {
      title: "Watch",
      img: "",
      price: 500,
      mrp: 700,
    },
    {
      title: "Pen",
      img: "",
      price: 500,
      mrp: 700,
    },
  ];
  return (
    <div className="d-flex">
      {array.map((item) => {
        item.discount = 10;
        return <Header item={item} />;
      })}

      {array2.map((item) => (
        <Header item={item} />
      ))}
    </div>
  );
}

export default App;
