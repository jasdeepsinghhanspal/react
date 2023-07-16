import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import BackgroundImage from "./backgroundimage";//background image file as background page
import MyComponent from "./crud2";//crud page to link the page 
const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<BackgroundImage/>}/>
            <Route path="/crud" element={<MyComponent/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;

------------------------------------------------------------------------------------------------------------------------------------------------------------------
import React, { useState } from 'react';
import Image1 from './shin.jpg';
import Image2 from './jsh1.jpeg';
import './index.css';
import { Link } from 'react-router-dom';

const BackgroundImage = () => {
  const [backgroundImage, setBackgroundImage] = useState(Image1);

  const handleImageChange = () => {
    const newImage = Image2;
    setBackgroundImage(newImage);
  };

  const  picture=()=>{
    const pic=Image1;
    setBackgroundImage(pic);
  }

  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <button onClick={handleImageChange}>Change Image</button>
      <button onClick={picture}>Reset</button>


      <div>
        <Link to={"/crud"}>Crud</Link>
      </div>
    </div>
  );
};

export default BackgroundImage;
