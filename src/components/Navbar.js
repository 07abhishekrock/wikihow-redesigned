import React, { useRef, useState } from "react";
import jump_to_link from '../utils/functions';
import gsap from 'gsap';
function Navbar() {
	let nav_ref = useRef(null);
	let nav_drop_down = useRef(null);
	let main_list = useRef(null);
	let options_list = useRef(null);
	let profile_bar = useRef(null);

	let [opacity_options_list, set_opacity] = useState(0);

	window.onresize=()=>{


		if(window.innerWidth > 600){
			if(nav_ref.current.getAttribute('size') == 0){
				nav_ref.current.setAttribute('size',1); 
			}
			else if(nav_ref.current.getAttribute('size') == 1){
				return;
			}
			nav_drop_down.current.removeAttribute('style');
			Array.from(options_list.current.children).forEach((element)=>{
				element.removeAttribute('style');
			})
			Array.from(main_list.current.children).forEach((element)=>{
				element.removeAttribute('style');
			})
			profile_bar.current.children[0].removeAttribute('style');
			nav_ref.current.removeAttribute('collapse');
		}
		else{
			nav_ref.current.setAttribute('size', 0);
		}
	}

	return (
		<nav ref={nav_ref}>
			<span className="logo">
				Wiki<i>How</i>
			</span>

			
			<div
				className="burger"
				onClick={(e) => {
					if (nav_ref.current.getAttribute("collapse") === "1") {
						nav_ref.current.removeAttribute("collapse");
						gsap.to(nav_drop_down.current,{yPercent:0, duration:0.2});
					} else {
						//starting navbar animation
						nav_ref.current.setAttribute("collapse", "1");

						//gsap animations for post-navbar-drop 	
						gsap.to(nav_drop_down.current,{yPercent:100, duration:0.2});
						gsap.from(options_list.current.children,{xPercent:100, duration:0.4,stagger:0.2});
						gsap.from(main_list.current.children,{scale:(0,0),duration:0.6,stagger:0.2})
						gsap.from(profile_bar.current.children[0],{opacity:0,yPercent:-200,duration:0.3,delay:0.2});
					}
				}}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<div className="drop-down-navbar" ref={nav_drop_down}>
				<ul className="nav-list-desktop" ref={main_list}>
					<li tabIndex={0} onClick={()=>jump_to_link('/explore')}>Explore</li>
					<li tabIndex={0} onClick={()=>jump_to_link('/login')}>Login</li>
					<li tabIndex={0} onFocus={(e)=>{
						set_opacity(1);
					}} onBlur={(e)=>{
						set_opacity(0);
					}}>Options</li>
				</ul>
				<div className="profile-bar" ref={profile_bar}>
					<div></div>
				</div>
				<ul className="nav-list-mobile" ref={options_list} view={parseInt(opacity_options_list)} 
				>
					<li>Write An Article</li>
					<li>Request An Article</li>
					<li>Contribute</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
