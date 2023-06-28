import './index.css';
// import {Season, SeasonComponent} from 'my-npm-package';
import {Splitter} from 'react-splitter-light';

import {Profiler, useMemo, useRef, useState} from 'react';

import 'winbox/dist/css/winbox.min.css'; // required
import 'winbox/dist/css/themes/modern.min.css'; // optional
import 'winbox/dist/css/themes/white.min.css';
import {Example1} from 'Example1';
import {Example2} from 'Example2';
import {Example3} from 'Example3'; // optional


export default function App() {
	return (
		<>
			<Example1 />
			<Example2 />
			<Example3 />
			<br/>
		</>
		// <WinBox width={1000} height={440}>
		// 	<div className="container">
		// 		<div className="left"></div>
		// 		<div className="content">
		// 			<Splitter mode={'vertical'} minSizes={['20px', '30px']}>
		// 				{/*<Split horizontal>*/}
		// 				<div className="content-top">
		// 				</div>
		// 				<div className="content-bottom">
		// 					<ColumnsContainer />
		// 				</div>
		// 				{/*</Split>*/}
		// 			</Splitter>
		// 		</div>
		// 		<div className="right"></div>
		// 	</div>
		// </WinBox>
	);
}

const columns = [
	{
		id: 1,
		main: 20,
		intermediate: 6,
		min: 20,
		max: 50,
		p: 0,
	},
	{
		id: 2,
		main: 30,
		intermediate: 6,
		min: 20,
		max: 50,
		p: 0,
	},
	// {
	// 	id: 3,
	// 	main: 28,
	// 	intermediate: 6,
	// 	min: 20,
	// 	max: 50,
	// 	p: 0,
	// },
	// {
	// 	id: 4,
	// 	main: 28,
	// 	intermediate: 6,
	// 	min: 20,
	// 	max: 50,
	// 	p: 0,
	// }
];

const Child = (props: { main: any; p: any; }) => {
	const {main, p} = props;
	return (
		<div>
			main: {main}, p: {p}
		</div>
	);
};

const ColumnsContainer = () => {
		const children = [];
		const cycleLength = useMemo(
			() => columns.reduce((acc, cur) => acc + cur.main + cur.intermediate, 0),
			[]
		);
		const [defaultSizes, setDefaultSizes] = useState(
			columns.map((el) => ((el.main + el.intermediate) * 100) / cycleLength)
		);
		const [columnsState, setColumnsState] = useState(columns);
		const [minMax, setMinMax] = useState(undefined);
		const ref = useRef();

		return (
			<Profiler id="Splitter" onRender={console.log}>
				<Splitter
					initialSizes={columnsState.map((el) => el.main + el.intermediate)}
					minSizes={columnsState.map((el) => el.min)}
					maxSizes={columnsState.map((el) => el.max)}
					// onResize={(sizes) => {
					// 	setColumnsState((prev) => {
					// 		let sum = 0;
					// 		return prev.map((el, ind, arr) => {
					// 			el.main = Math.round(sizes[ind] - el.intermediate);
					// 			if (ind === arr.length - 1) {
					// 				el.p = 100 - sum;
					// 			}
					// 			el.p = Math.round((sizes[ind] * 100) / cycleLength);
					// 			sum += el.p;
					// 			return el;
					// 		});
					// 	});
					// }}
					resizable
					// resizable={[true, false, true]}
					// discrete
				>
					{columnsState.map((el, ind) => {
						return (
							<Profiler id="Child" onRender={console.log} key={el.id}>
								<Child
									main={el.main}
									p={el.p || Math.round((el.main + el.intermediate) / cycleLength)}
									key={el.id}
								/>
							</Profiler>
						);
					})}
				</Splitter>
			</Profiler>
		);
	}
;
