import React from 'react';

function LoadingCircle(props){
	return(
		<div className="loading-circle" visible={props.visible}>
			<div className="loader"></div>
		</div>
	)
}

export default LoadingCircle;