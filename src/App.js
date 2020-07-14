import React from 'react';
import './style.css';
import image from "./image2.jpg"

function App() {
  return (
    <div>
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">Your name here</h1>
      <br />
      <img src="/image1.jpg" /> <br />
      <img src={image} />    </div>
    <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </div>
  
  );
}

export default App;
