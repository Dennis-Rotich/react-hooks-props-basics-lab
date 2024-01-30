import React from "react";
import Links from './Links'

function About(props) {

  const checkBio = (bio)=>{
    if(typeof bio === 'string' && bio.length > 0){
      return <p>{bio}</p>
  }
  else{ return null;}}

  return (
    <div id="about">
      <h2>About Me</h2>
      {checkBio(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
