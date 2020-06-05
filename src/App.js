import React, { Component } from 'react';
import Navigation from "./components/navigation/Navigation";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import Clarifai from 'clarifai';
import Logo from "./components/logo/Logo";
import Rank from "./components/Rank/Rank";
import Particles from 'react-particles-js';
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import './App.css';

const app = new Clarifai.App({
 apiKey: '3f331284842440bd9ac82541331991c1'
});

const particlesOptions = {
    "particles": {
    	number: {
    		value: 120,
    		density:{
    			enable: true,
    			value_area: 800
    		}
    	}
    },
         
}

class App extends Component {
	constructor(){
		super();
		this.state={
			input : '',
			imageUrl: ''
		}
	}

	onInputChange = (event) => {
		this.setState({input : event.target.value})
		
	} 
	

	onButtonSubmit = () => {
		this.setState({imageUrl:this.state.input})
		app.models.predict(
		Clarifai.COLOR_MODEL, 
		"https://samples.clarifai.com/face-det.jpg")
		.then(
		    function(response) {
		      console.log(response);
		    },
		    function(err) {
		      // there was an error a
		    }
  		);
	}
	

  render(){
 	return (
    	<div className="App">
    		<Particles className="particles" params={particlesOptions} />
    		<Navigation />
	      	<Logo />
		    <Rank />
		    <ImageLinkForm onInputChange={this.onInputChange} 
		    onButtonSubmit={this.onButtonSubmit} />
		    <FaceRecognition imageUrl={this.state.imageUrl} />
    	</div>
  	);
  }
}

export default App;
