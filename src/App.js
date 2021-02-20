import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LoadingCircle from './components/LoadingCircle';
import HeaderLandingPage from './components/HeaderLandingPage';
import StoryContainer from './components/StoryContainer';
import FooterElement from './components/FooterElement';
import './stylesheets/main.css';
import {UnderlineHeading, ParaHeading} from './components/UnderlineHeading';
import profile_pic from './bg_images/profile_pic.jpg';
import {Carousel,Grid, Article,CategoryArticle, ReviewArticle} from './components/Carousel';
import anime from './bg_images/anime.jpg';
import youtube from './bg_images/youtube.jpg';
import atlantic_icon from './icons/atlantic_icon.svg';
import wired_icon from './icons/wired_icon.svg';
import birthday from './bg_images/birthday.jpg';
import yoga from './bg_images/yoga.jpg';

import first_image from './bg_images/learn_anything.svg';
import second_image from './bg_images/sharing.svg';
import third_image from './bg_images/interaction.svg';
import fourth_image from './bg_images/authoring_process.svg';



function App() {

	useEffect(()=>{
		console.log('render complete');	
	},[])

	let [intersecting_story, set_intersecting_story] = useState(0);

	let review_elements = [
	{
		company_name:'The Atlantic',
		url:atlantic_icon,
		feedback_text : 'wikiHow may be the largest commercial platform in existence that hasn’t been accused of exploiting its users.',
		critic_name:'Rachel Greene',
		critic_position:'Senior Employee'
	},
	{
		company_name:'The Wired',
		url:wired_icon,
		feedback_text : 'Ive been yelling for a while about how wikiHow is doing the best consistent service journalism on the web right now',
		critic_name:'Richard Gere',
		critic_position:'Senior Employee'
	},
	{
		company_name:'The ',
		url:wired_icon,
		feedback_text : 'Ive been yelling for a while about how wikiHow is doing the best consistent service journalism on the web right now',
		critic_name:'Richard Gere',
		critic_position:'Senior Employee'
	},

	]

	let category_elements = [
	{
		title:'Art & Entertainment',
		desc:'from drawing cartoons to moonwalking like MJ',
		stat:'95000+ Articles',
		url:birthday
	},
	{
		title:'Health & Lifestyle',
		desc:'from fixing walls to eating right',
		stat:'9000+ Articles',
		url:yoga
	},


	]


	let story_elements = [
	{
		link:'Start Exploring',
		h:'Learn Anything, Everything',
		p:'From simple questions like <i>how to</i> replace fuse to complex projects as <i>how to</i> build a tesla coil, we’ve got you covered...',
		url:first_image
	},
	{
		link:'Join with Us',
		h:'Increase your Knowledge by Spreading it',
		p:'<i>Write blogs</i>, create <i>walkthroughs</i> or compile solutions in the form of <i>pictures and videos...</i>',
		url:second_image
	},
	{
		link:'Join Our Community',
		h:'Interaction is the Key to Progress',
		p:'Every article becomes a <i>call center</i> of its own, inviting people to question and answer <i>endlessly</i>.',
		url:third_image
	},
	{
		link:'Our Authoring Process',
		h:'Articles that are Genuine',
		p:'wikihow has a library of over <i>90,000</i> articles, updated daily. Every article is <i>genuine</i> and strict to the community guidelines.',
		url:fourth_image
	},
	]

	let articles_top_picks = [

	{
		title:"Become Popular on Youtube",
		steps_count:12,
		methods_count:3,
		url:youtube,
		author:{
			profile_pic:profile_pic,
			profile_name:'Abhishek Jha'
		},
		stats:{
			likes:25,
			messages:12,
			contributors:4
		}
	},
	{
		title:"How to Draw Anime",
		steps_count:12,
		methods_count:3,
		url:anime,
		author:{
			profile_pic:profile_pic,
			profile_name:'Abhishek Jha'
		},
		stats:{
			likes:25,
			messages:12,
			contributors:4
		}
	},
	{
		title:"How to Draw Anime",
		steps_count:12,
		methods_count:3,
		url:anime,
		author:{
			profile_pic:profile_pic,
			profile_name:'Abhishek Jha'
		},
		stats:{
			likes:25,
			messages:12,
			contributors:4
		}
	},


	]

  return (
  	<React.Fragment>

  		<Navbar/>
  		<LoadingCircle visible="0"/>
  		<HeaderLandingPage opacity={1}/>
  		<StoryContainer items={story_elements} set_intersecting_story={set_intersecting_story} count={story_elements.length}/>
  		<UnderlineHeading first_title="Our" second_title="Top" third_title="Picks"/>
  		<Carousel element_width = {300} element_height = {400}>
  		{
  			articles_top_picks.map((element, index)=>{
  				return <Article key={index} article={element} element_width = {300}/>
  			})
  		}
  		</Carousel>
  		<ParaHeading>
  		Wiki<i>how</i> is the expert platform for all your <i>how to questions</i>
  		<br/>
  		...
  		<br/>
  		Everyone believes that...
  		</ParaHeading>
  		<Grid> 
  		{
  			review_elements.map((element, index)=>{
  				return <ReviewArticle key={index} article={element} element_width={320}/>
  			})
  		}
  		</Grid>
  		<UnderlineHeading first_title="This" second_title="Month's" third_title="Trend"/>
  		<Carousel element_width = {300} element_height = {350}>
  		{
  			category_elements.map((element, index)=>{
  				return <CategoryArticle key={index} article={element} element_width = {300}/>
  			})
  		}
  		</Carousel>
		  <FooterElement/>


  	</React.Fragment>
  );
}

export default App;
