import {useState} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import {MODE, Splitter} from 'react-splitter-light';

export const Example1 = () => {
	const [mode, setMode] = useState<MODE>('horizontal');
	const code = `<div style={{height: 200}}>
  <Splitter mode={'${mode}'}>
    <div style={{background: 'green', height: '100%'}}>
      pane1
    </div>
    <div style={{background: 'blue', height: '100%'}}>
      pane2
    </div>
    <div style={{background: 'brown', height: '100%'}}>
      pane3
    </div>
  </Splitter>
</div>`

	return (
		<div style={{margin: '0 16px'}}>
			<h3>Example 1(vertical/horizontal)</h3>
			<br/>
			<button
				onClick={() => setMode((prevState) => prevState === 'horizontal' ? 'vertical' : 'horizontal')}
				className="button"
				style={{width: 100}}
			>
				{mode === 'horizontal' ? 'vertical' : 'horizontal'}
			</button>
			<br/>
			<br/>
			<SyntaxHighlighter language="javascript">
				{code}
			</SyntaxHighlighter>
			<br/>
			<div style={{height: 200}}>
				<Splitter mode={mode}>
					<div style={{background: 'rgba(0, 255, 0, 0.5)', height: '100%'}}>
						pane1
					</div>
					<div style={{background: 'rgba(0, 0, 255, 0.5)', height: '100%'}}>
						pane2
					</div>
					<div style={{background: 'rgba(255, 0, 0, 0.5)', height: '100%'}}>
						pane3
					</div>
				</Splitter>
			</div>
		</div>
	)
};