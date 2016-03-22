import React from 'react';


class ClusterDetailView extends React.Component{
  constructor(props) {
    super(props);
    //Create event binding here
  }

  render() {
    return (
      <div>
        <h1>(Details) - Header 1 {this.props.data}</h1>
      </div>
            );
  }
}


export default ClusterDetailView;
