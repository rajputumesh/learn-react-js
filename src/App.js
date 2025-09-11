import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Card from "./components/Card";

function App() {
  const array = [
    {
      title: "Watch",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a4wRSrGTFiRgquuMzhDxtMr5-PBmMCyhiA&s",
      price: 500,
      mrp: 700,
    },
    {
      title: "Pen",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a4wRSrGTFiRgquuMzhDxtMr5-PBmMCyhiA&s",
      price: 500,
      mrp: 700,
    },
    {
      title: "Shoes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a4wRSrGTFiRgquuMzhDxtMr5-PBmMCyhiA&s",
      price: 500,
      mrp: 700,
    },
    {
      title: "Belt",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a4wRSrGTFiRgquuMzhDxtMr5-PBmMCyhiA&s",
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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a4wRSrGTFiRgquuMzhDxtMr5-PBmMCyhiA&s",
      price: 500,
      mrp: 700,
    },
    {
      title: "Belt",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a4wRSrGTFiRgquuMzhDxtMr5-PBmMCyhiA&s",
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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a4wRSrGTFiRgquuMzhDxtMr5-PBmMCyhiA&s",
      price: 500,
      mrp: 700,
    },
    {
      title: "Belt",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a4wRSrGTFiRgquuMzhDxtMr5-PBmMCyhiA&s",
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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a4wRSrGTFiRgquuMzhDxtMr5-PBmMCyhiA&s",
      price: 500,
      mrp: 700,
    },
    {
      title: "Belt",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a4wRSrGTFiRgquuMzhDxtMr5-PBmMCyhiA&s",
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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a4wRSrGTFiRgquuMzhDxtMr5-PBmMCyhiA&s",
      price: 500,
      mrp: 700,
    },
  ];
  return (
    <>
      <Header />
      <br/>
      <div className="d-flex card">
        {array.map((item) => {
          item.discount = 10;
          return <Card item={item} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
