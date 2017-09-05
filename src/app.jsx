import { createElement } from 'react';
import React from 'react';
import { render } from 'react-dom';
import Home from './Components/Home/Home.jsx';
import 'react-material-components-thin/Typography/style.css';
import 'react-material-components-thin/Theme/style.css';
import './app.css';
render(
	<Home/>
	,document.querySelector('.app'));
