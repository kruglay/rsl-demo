import './index.css';

import {Example1} from 'Example1';
import {Example2} from 'Example2';
import {Example3} from 'Example3';

export default function App() {
	return (
		<>
			<h1 style={{margin: '0 16px'}}>
				<a href="https://github.com/kruglay/react-splitter-light">Demo for react-splitter-light</a>
			</h1>
			<br/>
			<Example1 />
			<br/>
			<br/>
			<Example2 />
			<br/>
			<br/>
			<Example3 />
			<br/>
		</>
	);
}