import {useState} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import {Splitter} from 'react-splitter-light';

export const Example2 = () => {
	const [discrete, setDiscrete] = useState<boolean | number>(5);
	const [initSizes, setInitSizes] = useState<number[] | undefined>([25, 25, 25, 25]);
	const [runnerSize, setRunnerSize] = useState(6);
	const [minSize, setMinSize] = useState(6);
	const [maxSize, setMaxSize] = useState(50);
	const [containerSize, setContainerSize] = useState({height: 300, width: 500})

	let panels = '';
	let unitText = '';


	initSizes.forEach((size, ind) => {
		unitText += size + (ind === initSizes.length - 1 ? '' : ' + ');
		panels += `
    <div key={${ind}} style={{background: hsl(${36 * ind}deg, 50%, 50%), height: '100%'}}>
      pane${ind + 1}
    </div>
`
	});

	const code = `<div style={{height: containerSize.height || 200, width: containerSize.width || 300}}>
  <Splitter discrete={${discrete}} initialSizes={${initSizes}} minSizes={${minSize}} runnerSize={${runnerSize}} maxSizes={${maxSize}}>
    ${panels}
  </Splitter>
</div>`


	return (
		<div style={{margin: '0 16px'}}>
			<h3>Example 2(discrete)</h3>
			<div>Move runners, and you see the difference. This case is useful, when you need changes exactly in units. In
				this example <b>1unit = SplitterWidth/({`${unitText}`}).</b> Set discrete = 0 to disable it.
			</div>
			<br />
			<div>
				<div>Container size:</div>
				<div>
					<span style={{width: 100, display: 'inline-block'}}>-- width:</span>
					<input type="number" value={containerSize.width} onChange={({target}) => {
						const str = target.value;
						return setContainerSize({...containerSize, width: Number(str) || 500});
					}}
					/>
					<span> px</span>
				</div>
				<div>
					<span style={{width: 100, display: 'inline-block'}}>-- height:</span>
					<input type="number" value={containerSize.height} onChange={({target}) => {
						const str = target.value;
						return setContainerSize({...containerSize, height: Number(str) || 300});
					}}
					/>
					<span> px</span>
				</div>
			</div>
			<br />
			<div>
				<span style={{width: 100, display: 'inline-block'}}>minSize: </span>
				<input type="number" value={Number(minSize)} onChange={({target}) => setMinSize(Number(target.value))} />
				<span> unit</span>
			</div>
			<br />
			<div>
				<span style={{width: 100, display: 'inline-block'}}>maxSize: </span>
				<input type="number" value={Number(maxSize)} onChange={({target}) => setMaxSize(Number(target.value))} />
				<span> unit</span>
			</div>
			<br />
			<div title="Set 0 to disable discrete">
				<span style={{width: 100, display: 'inline-block'}}>Discrete: </span>
				<input type="number" value={Number(discrete)} onChange={({target}) => setDiscrete(Number(target.value))} />
				<span> unit</span>
			</div>
			<br />
			<div>
				<span style={{width: 100, display: 'inline-block'}}>Initial sizes: </span>
				<input
					type="text"
					value={initSizes && initSizes.join()}
					onChange={({target}) => {
						const str = target.value;
						const filtered = str.split(',').filter(el => !Number.isNaN(Number(el))).map(Number);
						return setInitSizes(filtered.length > 0 ? filtered : undefined);
					}}
				/>
				<span> unit</span>
			</div>
			<br />
			<div>
				<span style={{width: 100, display: 'inline-block'}}>Runner size:</span>
				<input
					type="number"
					value={runnerSize}
					onChange={({target}) => {
						const str = target.value;
						return setRunnerSize(Number(str));
					}}
				/>
				<span> px</span>
			</div>
			<br />
			<SyntaxHighlighter language="javascript">
				{code}
			</SyntaxHighlighter>
			<br />
			<div style={{height: 200, width: 450}}>
				<Splitter
					discrete={discrete}
					initialSizes={initSizes}
					minSizes={minSize}
					runnerSize={runnerSize}
					maxSizes={maxSize}
				>
					{initSizes.map((size, ind) => {
						return (
							<div key={ind} style={{background: `hsl(${36 * ind}deg, 50%, 50%)`, height: '100%'}}>
								pane{ind + 1}
							</div>
						)
					})}
				</Splitter>
			</div>
		</div>
	)
};