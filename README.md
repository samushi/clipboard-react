## React copy clipboard code

Syntax highlighting your code on the blog and make it easy to copy with just one click

![How to use](https://raw.githubusercontent.com/samushi/clipboard-react/main/assets/copy-code.gif)

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

### Supported Language

 - JavaScript - javascript, js
 - CSS - css
 - Markup - markup, html, xml, svg, mathml, ssml, atom, rss
 - PHP - php
 - PHPDoc - phpdoc
 - YAML - yaml, yml
 - Go - go
 - React JSX - jsx
 - React TSX - tsx
 - etc.

 