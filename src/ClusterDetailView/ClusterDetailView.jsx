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


class ClusterDetailView extends React.Component{
  constructor(props) {
    super(props);
    //Create event binding here

    var status = this.props.environment.status.toLowerCase();
    var blockClassNames = classNames('detail', 
      "thumb-"+ status);

    this.status = status;
    this.blockClassNames = blockClassNames;
  }

  render() {
    const styles = {
          detail: {
            width: "50em",
            minHeight: "20em",
            float: "left",
            margin: ".5em",
          } ,

          detailLeft: {
            width: "50%"
          } ,

          detailRight: {
            width: "50%"
          } ,

          detailLeft: {
            float: "left",
            minHeight: "5em"
          } ,

          detailRight: {
            float: "right"
          } ,

          detailFooter: {
            clear: "both"
          } ,

          detailTitle: {
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
    }

    return (
      <div style={Object.assign({}, styles.detail , styles[this.status]) }>
        <h1 style={ styles.detailTitle }>
          {this.props.environment.name}
        </h1>
        <div>

        </div>
      </div>
            );
  }
}


export default ClusterDetailView;
