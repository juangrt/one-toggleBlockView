import React from 'react';



class ClusterThumbView extends React.Component{
  constructor(props) {
    super(props);

    var _data = [ {ip: "192.168.1.1"} , {ip: "192.168.1.2"} ,{ip: "192.168.1.3" }];
    this.state = { data: _data };
    //Create event binding here
  }

  
  render() {
    return (
      <div>
        <h3>(Thumbnail) - Header 3 {this.props.data}</h3>
      </div>
            );
  }
}


export default ClusterThumbView