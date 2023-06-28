import {useState} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import {MODE, Splitter} from 'react-splitter-light';

export const Example3 = () => {
	const [mode, setMode] = useState<MODE>('horizontal');
	const code = `<div style={{height: 500}}>
  <Splitter mode="vertical" runnerClassName="runner-add" runnerSize={24}>
    <Splitter mode={${mode}} actionOnContainerResize onResize={console.log}>
      <div style={{background: 'rgba(0, 255, 0, 0.5)', height: '100%'}}>
        pane2-1
      </div>
      <div style={{background: 'rgba(0, 0, 255, 0.5)', height: '100%'}}>
        pane2-2
      </div>
      <div style={{background: 'rgba(255, 0, 0, 0.5)', height: '100%'}}>
        pane2-3
      </div>
    </Splitter>
    <div style={{background: 'rgba(155, 100, 100, 0.5)', height: '100%'}}>pane1-1</div>
  </Splitter>
</div>`

	return (
		<div style={{margin: '0 16px'}}>
			<h3>Example 3(actionOnContainerResize)</h3>
			<div>Open console, to see logs on resize splitter container</div>
			<br />
			<button
				onClick={() => setMode((prevState) => prevState === 'horizontal' ? 'vertical' : 'horizontal')}
				className="button"
				style={{width: 100}}
			>
				{mode === 'horizontal' ? 'vertical' : 'horizontal'}
			</button>
			<br />
			<br />
			<SyntaxHighlighter language="javascript">
				{code}
			</SyntaxHighlighter>
			<br />
			<div style={{height: 500}}>
				<Splitter mode="vertical" runnerClassName="runner-add" runnerSize={24}>
					<Splitter mode={mode} actionOnContainerResize onResize={console.log}>
						<div style={{background: 'rgba(0, 255, 0, 0.5)', height: '100%'}}>
							pane2-1
						</div>
						<div style={{background: 'rgba(0, 0, 255, 0.5)', height: '100%'}}>
							pane2-2
						</div>
						<div style={{background: 'rgba(255, 0, 0, 0.5)', height: '100%'}}>
							pane2-3
						</div>
					</Splitter>
					<div style={{background: 'rgba(155, 100, 100, 0.5)', height: '100%'}}>pane1-1</div>
				</Splitter>
			</div>
		</div>
	)
};