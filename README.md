## React copy clickboard code

```
import React from 'react';
import ReactDOM from 'react-dom';
import {Copyclipboard} from 'samushi-clipboard-react';


const code = `
const javascriptVariable = "this code need to work";
console.log(javascriptVariable);
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <Copyclipboard copyText={code}/>
      </div>
    );
  }
}

```