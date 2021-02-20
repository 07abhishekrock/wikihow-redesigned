import React,{useState, useEffect} from 'react';

function Router(props){
    if(window.location.pathname === props.path){
    return (props.children);
    }
    else{
        return null
    }
}



export default Router;