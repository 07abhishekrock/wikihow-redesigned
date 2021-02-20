import React from 'react';
function UnderlineHeading(props){
	return(
		<div className = 'underline-heading'>
			<span>{props.first_title}</span>
			<span>{props.second_title}</span>
			<span>{props.third_title}</span>
		</div>
	);	
}
function ParaHeading(props){
	return(
		<p className="para-heading">{props.children}</p>
	);
}

export {UnderlineHeading, ParaHeading};