import { createElement as h, Component } from "react";
import Switch from 'react-material-components-thin/Switch';
import ComponentTable from '../ComponentTable.jsx';
import './SwitchPage.css';
import CodeBlock from '../CodeBlock.jsx';
import sample from './sample.txt';
export default class SwitchPage extends Component {
	constructor(){
		super();
		this.propsTable = [
			{
				component: 'Switch',
				props: [
					{
						name: 'disabled',
						description: 'Disables the switch.'
					}
				]
			}
		];
	}
	render(){
		return (
			<div className="page-switch">
				<ComponentTable data={this.propsTable}/>

				<div className="mdc-typography--display1">Sample code </div>
				<CodeBlock>
					<code class='lang-js' >
						{sample}
					</code>
				</CodeBlock>

				<div className="mdc-typography--display1">Original documentation</div>
				<div className="mdc-typography--body">
					This component encapsulates <span className="strong">mdc-switch</span>, you can refer to its documentation
					<a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-switch"> here</a>.
				</div>

				<div className="mdc-typography--display1">Demo </div>
				<div className="mdc-typography--title">Default </div>
				<Switch/>
				<div className="mdc-typography--title">Disabled </div>
				<Switch disabled={true}/>
			</div>
		);
	}
}