import React from "react";
import './App.css';
// import LoadImage from "./loadimage";
// import forest from './assets/forest.jpg';
// import beach from './assets/beach.jpg';
// import mountain from './assets/mountain.jfif';

// import LoadByButton from "./loadImageByButton";
import User from "./user";


function App() {
  // const images = [
  //   {
  //     src: beach,
  //     placeholder: "beach",
  //     alt: "Beach"
  //   },
  //   {
  //     src: mountain,
  //     placeholder: "mountains",
  //     alt: "Mountain"
  //   },
  //   {
  //     src: forest,
  //     placeholder: "forest",
  //     alt: "Forest"
  //   }
  // ]
  return(
    <div className="App">
      <h1>Loading Images</h1>
      <div className="wrapper">
        <User/>
        {/* <LoadByButton/> */}
        {/* {
          images.map((image, i) => (
            // <LoadImage
            //   key={i}
            //   src={image.src}
            //   placeholder={image.placeholder}
            //   alt={image.alt}
            // />
          )) 
        }*/}
      </div>
    </div>
  )
}

export default App;