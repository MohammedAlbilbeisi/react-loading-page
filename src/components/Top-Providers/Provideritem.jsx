import React  from 'react';
import stars from '../../../src/assets/stars5.svg';
import './Providers.css';


const  Provideritem = (props)=> {
  
  return (
    <div className='box' key={Math.random()}>
      <img src={props.image} title="image"/>
      <h5>{props.Name} </h5>
      <img src={stars} title="stars"/>
      <p> {props.description}</p>
      </div>
   
  );
}

export default Provideritem;