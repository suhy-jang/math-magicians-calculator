import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
// eslint-disable-next-line
import calculate from '../logic/calculate';

const App = () => (
  <div id="main" className="main d-flex flex-column">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
