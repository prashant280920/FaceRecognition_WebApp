import React, { Component } from 'react';
import Navigation from "./components/navigation/Navigation";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import Register from "./components/Register/Register";
import Clarifai from 'clarifai';
import Logo from "./components/logo/Logo";
import SignIn from "./components/SignIn/SignIn";
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
const initialState = {
			input : '',
			imageUrl: '',
			box: {},
			route: 'signin',
			isSignedIn: false,
			user:{
				id:"",
				name: "",
				email: "",
				entries:0,
				joined:""
			}
		}

class App extends Component {
	constructor(){
		super();
		this.state=initialState;
	}

	loadUser = (data) => {
		this.setState({user:{
				id:data.id,
				name: data.name,
				email: data.email,
				entries:data.entries,
				joined:data.joined
			}
		})
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
		.then(response => {
			if(response){
				fetch('https://safe-reef-80195.herokuapp.com/image',{
					method: 'put',
					headers: {'Content-Type': "application/json"},
					body: JSON.stringify({
						id: this.state.user.id
					})

				})
				.then(response => response.json())
				.then(count => {
					this.setState(Object.assign(this.state.user,{entries:count}))
				})
				.catch(console.log)
			}
			this.displayflexbox(this.calculateFaceLocation(response.outputs[0].data.regions))
			console.log(this.state.user.id,this.state.user.entries)
		})
		.catch(err => console.log(err));
	}

	onRouteChange = (route) => {
		if (route === 'signin'){
			this.setState({isSignedIn:false})
		} else if (route === "home"){
			this.setState({isSignedIn:true})
		} else if (route === "signout"){
			this.setState(initialState)
		}
		this.setState({route: route})
	}
	

  render(){
 	return (
    	<div className="App">
    		<Particles className="particles" params={particlesOptions} />
    		<Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
    		{ this.state.route === 'home'
    			? <div>
			      	<Logo />
				    <Rank name={this.state.user.name} entries={this.state.user.entries} />
				    <ImageLinkForm onInputChange={this.onInputChange} 
				    onButtonSubmit={this.onButtonSubmit} />
				    <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
				</div> 
    			: (this.state.route === 'signin')
    			? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
    			: <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
		      	 
			}
    	</div>
  	);
  }
}

export default App;