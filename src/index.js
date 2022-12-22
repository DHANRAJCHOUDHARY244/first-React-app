import React from 'react';
import Heading from './Heading';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const fav_palace = 'AMERICA';
const short_name = 'USA';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const today = new Date();

ReactDOM.render(
  <div className="top">
    <Heading />
    <h1 contentEditable="true">CURRENT DAY IS {today.toLocaleDateString('hi-IN', options)}</h1>
    <h3>
      Current Time Is{' '}
      {(today.getHours() % 12) + ':' + today.getMinutes() + ':' + today.getSeconds() + ':' + today.getMilliseconds()}
    </h3>
    <h4>Hii My favourite food</h4>
    <ul>
      <li>BANANA</li>
      <li>KAGU KATLI</li>
      <li>MILK SHAKE</li>
      <li>PINE APPLE</li>
    </ul>
    <h5>My Favourite palace is {fav_palace}</h5>
    <h6>Sort name is {`${fav_palace}  ${short_name}`}</h6>
  </div>,
  document.getElementById('root')
);
