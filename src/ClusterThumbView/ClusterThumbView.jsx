import React from 'react';

class ClusterThumbView extends React.Component{
  constructor(props) {
    super(props);
    this.style = this.style.bind(this);
  }

  style(){
    var style = {
      width: "10em",
      minHeight: "10em",
      float: "left",
      margin: ".5em",
      backgroundColor: "#FFFFFF"
    };
    return Object.assign({}, style , this.props.style);
  }

  render() {
    return (
      <div className="oneThumbView" style={this.style()} onClick={this.props.onClick}>
        {this.props.element}
      </div>
            );
  }
}


ClusterThumbView.propTypes = { 
  onClick: React.PropTypes.func,
  element: React.PropTypes.element,
  style: React.PropTypes.object
};

ClusterThumbView.defaultProps = {
  style: {}
};


export default ClusterThumbView;