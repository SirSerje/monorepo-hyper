import { hot } from 'react-hot-loader/root';
import React from 'react';
import word from 'core';
import { AnExample, AnotherExample } from 'widgets';
import style from './components/hello-world/hello-world.scss';
import HelloWorld from './components/hello-world';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <div>
        import from core lib : {word}
        <br />
        import from widget lib :<AnExample />
        <br />
        <AnotherExample />
        <br />
        <HelloWorld title="Component import" />
        <img className={style.image} src={logo} alt="none" />
        Image import
        <div className={style.helloWorld}>apply style from 'style'</div>
      </div>
    </div>
  );
}

export default hot(App);
