
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './src/hello';
import ClusterToggleView from './src/ClusterToggleView';
import Pong from 'react-pong';

ReactDOM.render(
  <ClusterToggleView data="Juan"></ClusterToggleView>,
  document.getElementById('container')
);

