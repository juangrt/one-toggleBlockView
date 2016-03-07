import React from 'react';

/*
 * Accepted Model
 * Number - Id (Should be unique)
 * Array - Server List
 * String - Environment Name
 * String - Status
 * String?- Version
 */

 /*
 {
  id: 1,
  serverList: ["192.168.1.1" , "192.168.1.2"] ,
  name: "dev" ,
  status: "Pending",
  version: "1.5"
}
*/

class ClusterThumbView extends React.Component{
  constructor(props) {
    super(props);


    //Create event binding here
    this.copyAllClicked = this.copyAllClicked.bind(this);
  }

  copyAllClicked(event){
    console.log("Copy All clicked for: " + this.props.environment.name);
  }
  
  render() {
    return (
      <div className="env-block-thumb , env-block-thumb-pending">
        <h3 id="title" className="env-block-thumb-title">
          {this.props.environment.name}
        </h3>
        <div className="env-block-thumb-left">

        </div>
        
        <div className="env-block-thumb-right">
          <div onClick={this.copyAllClicked}>
            Copy All
          </div>
        </div>

        <div className="env-block-thumb-footer">
          <div style={{float:'left'}}>
            {this.props.environment.version}
          </div>
          <div style={{float:'right' , textAlign:'right'}}>
            {this.props.environment.status}
            </div>
        </div>
      </div>
            );
  }
}


//ClusterThumbView.propTypes = { mode: React.PropTypes.string };


export default ClusterThumbView