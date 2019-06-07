import React from 'react';
import ReactDOM from 'react-dom';
import AnExample from './AnExample';
import AnotherExample from './AnotherExample';


it('rollupJestBoilerplate(string)', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnotherExample />, div);
  ReactDOM.render(<AnExample />, div);
  ReactDOM.unmountComponentAtNode(div);
});
