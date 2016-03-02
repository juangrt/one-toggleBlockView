
import React from 'react';
import ReactDOM from 'react-dom';
import ClusterToggleView from './src/ClusterToggleView';



/*
 * Accepted Model
 * Number - Id (Should be unique)
 * Array - Server List
 * String - Environment Name
 * String - Status
 * String?- Version
 */
var mockDataThumb1 = {
  id: 1,
  serverList: ["192.168.1.1" , "192.168.1.2"] ,
  name: "dev" ,
  status: "Pending",
  version: "1.5"
};

var mockDataThumb2 = {
  id: 1,
  serverList: ["192.168.1.1" , "192.168.1.2"] ,
  name: "dev2" ,
  status: "Pending",
  version: "1.5"
};

var mockDataThumb3 = {
  id: 1,
  serverList: ["192.168.1.1" , "192.168.1.2"] ,
  name: "dev3" ,
  status: "Pending",
  version: "1.5"
};


ReactDOM.render(
  <div>
    <ClusterToggleView mode="thumbnail" environment={mockDataThumb1}></ClusterToggleView>
    <ClusterToggleView mode="thumbnail" environment={mockDataThumb2}></ClusterToggleView>
    <ClusterToggleView mode="thumbnail" environment={mockDataThumb3}></ClusterToggleView>
  </div>,
  document.getElementById('container')
);

