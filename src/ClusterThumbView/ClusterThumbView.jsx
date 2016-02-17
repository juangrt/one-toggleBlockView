import React from 'react';



class ClusterThumbView extends React.Component{
  constructor(props) {
    super(props);

    
    this.state.hosts_data = [ {ip: "192.168.1.1"} , {ip: "192.168.1.2"} ,{ip: "192.168.1.3" }];
    //Create event binding here
  }

  
  render() {
    return (
      <div>
        Hello {this.props.data}
        /*{ this.state.hosts_data.map((host) => {
          return <p>{host.ip}</p>;
        })}*/
      </div>
            );
  }
}




//Events management

//Display Data

//Template?


export default ClusterThumbView

/*
React.createClass({
  render: function() {
    return <div>Hello {this.props.data}</div>;
  }
});
*/