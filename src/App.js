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
 apiKey: '3216bc4451494eabbd44784b0608a328'
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
			imageUrl: '',
			box: {}
		}
	}

	calculateFaceLocation = (array) =>{
		const l=[]
		const image = document.getElementById("inputimage");
		const width = Number(image.width);
		const height = Number(image.height);
		for (var i=0;i<array.length;i++){
			const clarifaiFace = array[i].region_info.bounding_box;
			l.push({
			leftCol: clarifaiFace.left_col * width,
			topRow : clarifaiFace.top_row * height,
			rightCol: width - (clarifaiFace.right_col * width),
			bottomRow: height - (clarifaiFace.bottom_row * height)
			})
		}
		return l
	}

	

	displayflexbox = (box) => {
		console.log(box)
		this.setState({box : box})
	}

	onInputChange = (event) => {
		this.setState({input : event.target.value})
		
	} 
	

	onButtonSubmit = () => {
		this.setState({imageUrl:this.state.input})
		app.models.predict(
		Clarifai.FACE_DETECT_MODEL, 
		this.state.input)
		.then(response => this.displayflexbox(this.calculateFaceLocation(response.outputs[0].data.regions)))
		.catch(err => console.log(err));
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
		    <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
    	</div>
  	);
  }
}

export default App;
