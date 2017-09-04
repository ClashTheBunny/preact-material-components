import { createElement as h, Component } from "react";
import Snackbar from 'react-material-components-thin/Snackbar';
import Button from 'react-material-components-thin/Button';
import ComponentTable from '../ComponentTable.jsx';
import './SnackbarPage.css';
import CodeBlock from '../CodeBlock.jsx';
import sample from './sample.txt';
export default class SnackbarPage extends Component {
	constructor(){
		super();
		this.propsTable = [
			{
				component: 'Snackbar',
				props: [
					{
						name: 'dismissesOnAction',
						description: 'tells whether or not snackbar auto dismisses upon clicking the action button'
					}
				]
			}
		];
	}
	render(){
		return (
			<div className="page-snackbar">
				<ComponentTable data={this.propsTable}/>

				<div className="mdc-typography--display1">Sample code </div>
				<CodeBlock>
					<code class='lang-js' >
						{sample}
					</code>
				</CodeBlock>

				<div className="mdc-typography--display1">Original documentation</div>
				<div className="mdc-typography--body">
					This component encapsulates <span className="strong">mdc-snackbar</span>, you can refer to its documentation
					<a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar"> here</a>.
				</div>

				<div className="mdc-typography--display1">Demo </div>
				<Button raised={true} primary={true} onClick={()=>{
					this.bar.MDComponent.show({
						message: "Hello Snack!"
					});
				}}>
						Show snack</Button>
				<Snackbar ref={bar=>{this.bar=bar;}}/>
			</div>
		);
	}
}