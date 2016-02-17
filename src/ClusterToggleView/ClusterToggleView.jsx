import React from 'react';
import ClusterThumbView from '../ClusterThumbView';
import ClusterDetailView from '../ClusterDetailView';

//Default state
//mode : Thumbnail | Detail

let THUMBNAIL_MODE = "thumbnail";
let DETAIL_MODE    = "detail";

class ClusterToggleView extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      mode: this.props.mode
    }

    //Create event bindings here
    this.onToggleView = this.onToggleView.bind(this);
  }

  onToggleView(event){
    var newMode = this.state.mode === THUMBNAIL_MODE? DETAIL_MODE : THUMBNAIL_MODE;
    this.setState({mode: newMode});
  }

  getView() {
    if(this.state.mode === THUMBNAIL_MODE) {
      return <ClusterThumbView data={this.state.mode}></ClusterThumbView>
    } else {
      return <ClusterDetailView data={this.state.mode}></ClusterDetailView>
    }
  }

  render() {
    return (
      <div onClick={this.onToggleView}>
        {this.getView()}
      </div>
            );
  }
}

Counter.propTypes = { mode: React.PropTypes.string };
ClusterToggleView.defaultProps = {
    mode: THUMBNAIL_MODE
  };

export default ClusterToggleView