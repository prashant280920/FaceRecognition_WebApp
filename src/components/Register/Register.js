import React from "react";

const Register = ({ onRouteChange }) => {
	return (
		<article className="center w-100 nw6 br3 pa3 pa4-ns mv4 ba b--black-10 shadow-5" style={{'maxWidth':'20rem'}}>
			<main className="pa3 black-80">
			  <div className="measure ">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="name-address">Name</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			     
			    </fieldset>
			    <div className="">
			      <input 
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      type="submit" 
				      value="Register"
				      onClick = {() => onRouteChange('home')}
				    />
			    </div>
			   
			  </div>
			</main>
		</article>

	);
}

export default Register;