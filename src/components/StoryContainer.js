import React,{useEffect,useRef,useState} from 'react';
import gsap from 'gsap';
function return_italic(){
	return '<i>hello</i>';
}
function SpecialP(props){
	let p_ref = useRef(null);
	useEffect(()=>{
		p_ref.current.innerHTML = props.text;
	})
	return <p ref={p_ref}></p>
}
function StoryContainer(props){
	let [offset, set_offset] = useState(0);
	let [drift, set_drift] = useState(0);
	let [start_pos, set_start_pos] = useState(0);
	let [enlarge, set_enlarge] = useState(1);
	let [down, set_down] = useState(0);
	let [transition_time, set_transition_time] = useState(0);
	let wrapper_ref = useRef(null);
	let parent_ref = useRef(null)
	let next_btn_ref = useRef(null);

	function return_threshold(){
		let array = [];
		for(let i = 0;i< 100;i++)
		{
			array.push(i/100);		
		}
		return array;
	}

	let callback = (entries)=>{
		let entry = entries[0];
		if(entry.isIntersecting && entry.intersectionRatio >= 0.8){
			//element is entirely into the view
			wrapper_ref.current.style.animation = `trailer 1s ease-out 1`;
		}
	}

	useEffect(()=>{
		let options = {
			root:null,
			rootMargin:'0px',
			threshold:return_threshold()
		}
		let intersection_observer = new IntersectionObserver(callback, options);
		intersection_observer.observe(parent_ref.current);

		return ()=>{
			intersection_observer.unobserve(parent_ref.current);
		}
	})


	return(
		<div className="StoryContainer" ref={parent_ref}>
			<div className="story-wrapper" ref={wrapper_ref} style={{width:`calc(${props.count} * 100%)`, transition:`transform ${transition_time}s ease-out` ,transform:`translateX( calc( ${(100 * drift) / props.count}% + ${offset}px ) )`}}
				onTouchStart = {(e)=>{
					set_start_pos(e.changedTouches[0].clientX);
					set_down(1);
					set_transition_time(0);
				}}
				onTouchMove = {(e)=>{
					if(!down){
						return;
					}
					let new_pos = e.changedTouches[0].clientX;
					let diff = new_pos - start_pos;
				if(Math.abs(diff) < 20){
					return;
				}
					set_offset(diff);
					if( diff > ((wrapper_ref.current.offsetWidth * 0.3) / props.count) ){

						set_transition_time(0.3);
						if(drift === 0){
							console.log('hello');

							set_offset(0);
							set_down(0);
							return;
						}

						set_offset(0);
						set_drift(drift + 1);
						set_down(0);
						return;
					}
					if(diff < -((wrapper_ref.current.offsetWidth * 0.3) / props.count)){
						set_transition_time(0.3);

						if(drift ===  1 - props.count){
							console.log('end');

							set_offset(0);
							set_down(0);
							return;
						}

						set_offset(0);
						set_drift(drift - 1);
						set_down(0);
						return;
					}
				}}
				onTouchEnd = {(e)=>{
					set_transition_time(0.3);
					set_down(0);
					set_offset(0);
				}}

			>
				{props.items.map((element, index)=>{
					return <div className="story" key={index} style={{backgroundImage:`url(${element.url})`,width:`calc(100% / ${props.count})`,transform:`translateX(${index * 100}%)`}} enlarge={enlarge}>
								<h1>{element.h}</h1>
								<SpecialP text={element.p}></SpecialP>
								<button>{element.link}</button>
								<div className="bg" style={{backgroundImage:`url(${element.url}`}}></div>
								<span onClick={(e)=>{	
									e.target.style.animation = 'none';
									if(enlarge){
										set_enlarge(0);
									}
									else{
										set_enlarge(1);
									}
								}}></span>
						   </div>
				})}	
			</div>
				<button className="next" ref={next_btn_ref} onClick={(e)=>{

					e.target.style.animation = 'none';

					e.target.disabled = true;
					setTimeout(() => {
						e.target.removeAttribute('disabled');	
					}, 500);

					set_transition_time(0.5);

					if(drift === 1 - props.count){
						set_drift(0);
						return;
					}
					set_drift(drift - 1);

				}}></button>
		</div>
	);	
}
export default StoryContainer;