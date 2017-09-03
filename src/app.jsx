import { createElement } from 'react';
import { render } from 'react-dom';
import Home from './Components/Home/Home.jsx';
import 'react-material-components-web-thin/Typography/style.css';
import 'react-material-components-web-thin/Theme/style.css';
import './app.css';
render(
	<Home/>
	,document.querySelector('.app'));
