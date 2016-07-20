import classNames from 'classnames';
import React from 'react';


class ClusterDetailView extends React.Component{
  constructor(props) {
    super(props);
    //Create event binding here
    this.onWindowClick = this.onWindowClick.bind(this);
    this.mainComponentStyle = this.mainComponentStyle.bind(this);
    this.containerStyle = this.backdropStyle.bind(this);

  }

  onWindowClick(event) {
    event.stopPropagation();
  }

  backdropStyle(){
    const style = {
      position: "fixed",
      width:     "100%",
      height:     "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      top: "0",
      left: "0",
    }
    return style;
  }

  mainComponentStyle() {
    const style = {
      zIndex: "100",
      border: "solid 1px black",
      position: "fixed",
      left: "12.5%",
      top: "5%",
      height: "90%",
      width: "75%",
      backgroundColor: "#FFFFFF"
    }
    return Object.assign({}, style , this.props.style);
  }

  render() {
    return (
      <div style={this.backdropStyle()} onClick={this.props.onClick}>
        <div style={this.mainComponentStyle()} onClick={this.onWindowClick}>
          {this.props.element}
        </div>
      </div>
            );
  }
}

ClusterDetailView.propTypes = { 
  onClick: React.PropTypes.func,
  element: React.PropTypes.element.isRequired,
  style: React.PropTypes.object
};

ClusterDetailView.defaultProps = {
    style: {}
  };

export default ClusterDetailView;
