import classNames from 'classnames';
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

    var status = this.props.environment.status.toLowerCase();

    var blockClassNames = classNames('env-block-thumb', 
      "env-block-thumb-"+ status);

    //Create event binding here
    this.status = status;
    this.copyAllClicked = this.copyAllClicked.bind(this);
    this.blockClassNames = blockClassNames;
  }

  copyAllClicked(event){
    console.log("Copy All clicked for: " + this.props.environment.name);
  }
  
  render() {
        const styles = {
          thumb: {
            width: "10em",
            minHeight: "10em",
            float: "left",
            margin: ".5em",

          } ,

          thumbLeft: {
            width: "50%"
          } ,

          thumbRight: {
            width: "50%"
          } ,

          thumbLeft: {
            float: "left",
            minHeight: "5em"
          } ,

          thumbRight: {
            float: "right"
          } ,

          thumbFooter: {
            clear: "both"
          } ,

          title: {
            color: "#000000" ,
            textAlign: "center"
          } ,

          pending: {
            backgroundColor: "#ff0"
          } ,

          success: {
            backgroundColor: "#0f0"
          } ,

          failed: {
            backgroundColor: "#f00"
          }
        };

    return (
      <div style={Object.assign({}, styles.thumb , styles[this.status.toLowerCase()])}>
        <h3 style={styles.title} >
          {this.props.environment.name}
        </h3>
        <div style={styles.thumbLeft } > </div>
        
        <div style={styles.thumbRight}>
          <div onClick={this.copyAllClicked}>
            Copy All
          </div>
        </div>

        <div style={styles.thumbFooter}>
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


export default ClusterThumbView;