import React from 'react';
import { storiesOf } from '@storybook/react';

import { Copyclipboard } from '../components/Copyclipboard';

const stories = storiesOf('Component Test', module);

const code = `
span.foo {
	background-color: navy;
	color: #BFD;
}

span.bar {
	background: rgba(105, 0, 12, .38);
	color: hsl(30, 100%, 50%);
    border-color: transparent;
}
`.trim();

const codejs = `
const laracodes = () => {
    console.log("This is code");
}
`.trim();

stories.add('App', () => {
    return (
        <div>
            <h2>Javascript Example Code Highlight</h2>
            <Copyclipboard copyText={codejs} language="js"/>
            <h2>CSS Example Code Highlight</h2>
            <Copyclipboard copyText={code} language="css"/>
            <textarea style={{width: "500px", height: "200px"}}></textarea>
        </div>
    );
});