import React from 'react';
import { storiesOf } from '@storybook/react';

import { Copyclipboard } from '../components/Copyclipboard';

const stories = storiesOf('Component Test', module);

const code = `
import React from 'react';
import { storiesOf } from '@storybook/react';

import { Copyclipboard } from '../components/Copyclipboard';

const stories = storiesOf('Component Test', module);

stories.add('App', () => {
    return (
        <Copyclipboard copyText={code}/>
    );
});
`;

stories.add('App', () => {
    return (
        <div>
            <Copyclipboard copyText={code}/>
            <textarea style={{width: "500px", height: "200px"}}></textarea>
        </div>
    );
});