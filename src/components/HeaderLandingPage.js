import React, {useEffect, useRef ,useState } from "react";

function HeaderLandingPage(props) {
	let [search_text, set_search_text] = useState("");
	let header = useRef(null);
	useEffect(()=>{
		header.current.style.opacity = 1;
	},[])
	return (
		<div className="header-landing-container" ref={header}>
			<div className="search-bar">
				<h1>
					Search <i>How</i> To
				</h1>
				<h1>...</h1>
				<input
					type="text"
					placeholder="Playing Guitar"
					value={search_text}
					onFocus={(e) => {
						e.target.parentNode.setAttribute("active", "1");
					}}
					onBlur={(e) => {
						e.target.parentNode.setAttribute("active", "0");
					}}
					onChange={(e) => {
						set_search_text(e.target.value);
					}}
				/>
			</div>
			<span>Search Across a network of more than <i>90000</i> HOW-TO Articles.</span>
		</div>
	);
}

export default HeaderLandingPage;
