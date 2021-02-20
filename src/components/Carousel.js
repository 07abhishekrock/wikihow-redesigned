import React,{useState, useRef ,useEffect} from 'react';
import contributors from '../icons/contributors.svg';
import likes from '../icons/likes.svg';
import messages from '../icons/msgs.svg'


function Carousel(props){

	let [offset, set_offset] = useState(0);
	let [drift, set_drift] = useState(0);
	let [start_pos, set_start_pos] = useState(0);
	let [down, set_down] = useState(0);
	let [max_drift , set_max_drift] = useState(0);
	let [transition, set_transition] = useState(0);
	let wrapper_ref = useRef(null);
	let carousel_parent = useRef(null);




	return <div className="carousel" ref={carousel_parent} style={{height:`${props.element_height}px`}}>
			<div className = "carousel-wrapper" ref={wrapper_ref} style={{
				width:`calc(calc(${props.children.length + 1} * ${props.element_width}px) + calc(80px))`,
				transform:`translateX(calc(calc(${props.element_width + 20}px * ${drift}) + ${offset}px))`,
				transition:`transform ${transition}s ease-in`
			}}

			onTouchStart={(e)=>{
				set_start_pos(e.changedTouches[0].clientX);
				set_down(1);
				set_transition(0);
				set_max_drift(Math.floor(carousel_parent.current.offsetWidth / (props.element_width + 20)));
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
				if( diff > (props.element_width * 0.3) ){
					set_transition(0.3);
					if(drift === 0){

						set_offset(0);
						set_down(0);
						return;
					}

					set_offset(0);
					set_drift(drift + 1);
					set_down(0);
					return;
				}
				if(diff < -(props.element_width * 0.3)){
					set_transition(0.3);
					if(max_drift >= props.children.length){

					set_offset(0);
					set_down(0);
					return(0);

					}
					if(drift ===  max_drift - props.children.length){
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
				    set_transition(0.3);
					set_down(0);
					set_offset(0);
				}}

			>
				{props.children}
			</div>
			<div className="btn-group">
				<button className="prev-button" onClick={(e)=>{
					let new_max_drift = Math.floor(carousel_parent.current.offsetWidth / (props.element_width + 20));  
					if(new_max_drift >= props.children.length){
						set_drift(0);
					}
					set_transition(0.3);
					e.target.disabled = true;	

					window.setTimeout(()=>{
						e.target.removeAttribute('disabled');
						set_offset(0);
					}, 300)

					if(drift === 0){
						set_offset(40);
					}
					else{
						set_drift(drift + 1);
					}
				}}>Prev</button>
				<button className="next-button" onClick={(e)=>{
					let new_max_drift = Math.floor(carousel_parent.current.offsetWidth / (props.element_width + 20));  
					set_transition(0.3);
					e.target.disabled = true;	

					window.setTimeout(()=>{
						e.target.removeAttribute('disabled');
						set_offset(0);
					}, 300)

					if(drift === new_max_drift - props.children.length ){
						set_offset(-40);
					}
					else{
						if(new_max_drift >= props.children.length)
						{
							set_offset(-40);
						}
						else{
						set_drift(drift - 1);
						}
					}
					
				}}>Next</button>
			</div>
		 </div>
}

function Article(props){
	return <div className = "article" style={{backgroundImage : `url(${props.article['url']})` , width: props.element_width}}>
				<h1>{props.article['title']}</h1>
				<div className="profile-info">
					<span>{props.article['author']['profile_name']}</span>
					<div style={{backgroundImage:`url(${props.article['author']['profile_pic']})`}}></div>
				</div>
				<div className="article-info">
					<span>{`${props.article['methods_count']} Methods`}</span>
					<span>{`${props.article['steps_count']} Steps`}</span>
				</div>
				<div className = "info-stats">
					<div>
						<span style={{backgroundImage:`url(${likes})`}}></span>
						<span>{props.article.stats.likes}</span>
					</div>
					<div>
						<span style={{backgroundImage:`url(${messages})`}}></span>
						<span>{props.article.stats.messages}</span>
					</div>
					<div>
						<span style={{backgroundImage:`url(${contributors})`}}></span>
						<span>{props.article.stats.contributors}</span>
					</div>
				</div>
		   </div>
}

function ReviewArticle(props){
	return <div className = "review-article" style={{backgroundImage:`url(${props.article['url']})`}}>
			<h1>{props.article.company_name}</h1>
			<p>{props.article.feedback_text}</p>
			<div>
				<span>{props.article.critic_name}</span>
				<span>{props.article.critic_position}</span>
			</div>
	</div>
}

function CategoryArticle(props){
	return <div className="category-card" style={{backgroundImage:`url(${props.article.url})`, width:props.element_width}}>
				<h1>{props.article.title}</h1>
				<p>{props.article.desc}</p>
				<span>{props.article.stat}</span>
		   </div>
}



function Grid(props){
	return (
		<div className = "grid">
		{props.children}
		</div>
		);
}
export {Carousel,Grid, Article, ReviewArticle, CategoryArticle}