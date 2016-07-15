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
    this.onWindowClick = this.onWindowClick.bind(this);
  }

  onWindowClick(event) {
    event.stopPropagation();
  }

  render() {
    const styles = {
          detailContainer: {
            position: "fixed",
            width:     "100%",
            height:     "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            top: "0",
            left: "0",
          },

          detail: {
            zIndex: "100",
            border: "solid 1px black",
            position: "fixed",
            left: "12.5%",
            top: "5%",
            height: "90%",
            width: "75%"
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
      <div style={styles.detailContainer} onClick={this.props.onClick}>
        <div style={Object.assign({}, styles.detail , styles[this.status]) } onClick={this.onWindowClick}>
          <h1 style={ styles.detailTitle }>
            {this.props.environment.name}
          </h1>
          <div>

          </div>
        </div>
      </div>
            );
  }
}

ClusterDetailView.propTypes = { onClick: React.PropTypes.func };


export default ClusterDetailView;
