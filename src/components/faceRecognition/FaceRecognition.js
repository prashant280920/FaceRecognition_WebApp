import React from "react";
import './FaceRecognition.css';
const creatediv = (box) => {
		var a = <div className="bounding-box" style={{top:box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>;
		return (a)
		
	}
const FaceRecognition = ({ imageUrl, box }) => {
	var i=0;
	const item =[]
	for(i=0;i<box.length;i++){
		item.push(creatediv(box[i]))
	}
	return (
		<div className="center ma">
			<div className="absolute mt2">
			<img id="inputimage" src={imageUrl} alt='' width="500px" height="auto"/>
			{item}
			
			</div>
		</div>
	);
}

export default FaceRecognition;