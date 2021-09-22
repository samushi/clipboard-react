import React from 'react';
import { storiesOf } from '@storybook/react';

import { Copyclipboard } from '../components/Copyclipboard';

const stories = storiesOf('Component Test', module);

const code = `
body{
    margin: 10px;
}
`;

stories.add('App', () => {
    return (
        <div>
            <Copyclipboard copyText={code} language="css"/>
            <textarea style={{width: "500px", height: "200px"}}></textarea>
        </div>
    );
});