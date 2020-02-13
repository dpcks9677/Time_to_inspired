import React from 'react';
import Clock from './components/Clock';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <html>
      <head>
      <meta charset="UTF-8"></meta>
      <title>Time to Inspired</title>
      </head>
      <body>
        <Clock></Clock>
      </body>
      </html>
    )
  }
}

export default App;
