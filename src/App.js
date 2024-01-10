import './App.css';
import ImageSlider from './ImageSlider';

function App() {
  const slides=[
    { url: "./img/img1.jpg", title: "mountain"},
    { url: "./img/img2.jpg", title: "nature" },
    { url: "./img/img3.jpg", title: "mountain2" },
    { url: "./img/img4.jpg", title: "nature3" },
    { url: "./img/img5.jpg", title: "tree" },
    { url: "./img/img6.jpg", title: "road" },
  ];
  const containerStyles={
    width:"500px",
    height:"280px",
    margin:"0 auto"
  };
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default App;
