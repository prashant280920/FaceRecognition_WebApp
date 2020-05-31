import React from 'react';
import Navigation from "./components/navigation/Navigation"
import Logo from "./components/logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*       <FaceRecognition>*/}
    </div>
  );
}

export default App;
