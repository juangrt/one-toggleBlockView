import React from 'react';
import ClusterThumbView from '../ClusterThumbView';
import ClusterDetailView from '../ClusterDetailView';

//Default state
//mode : Thumbnail | Detail
const THUMBNAIL_MODE = "thumbnail";
const DETAIL_MODE    = "detail";

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
    return (
        <div>
          <ClusterThumbView 
            element={this.props.thumbElement}
            style={this.props.thumbViewStyle}
            onClick={this.onToggleView}></ClusterThumbView>
          {(() => {
            if(this.state.mode === DETAIL_MODE){
              return <ClusterDetailView 
                        style={this.props.detailViewStyle}
                        element={this.props.detailElement}
                        onClick={this.onToggleView}></ClusterDetailView>
            }
          })()}
        </div>
        );
  }

  render() {
    return (
      <div>
        {this.getView()}
      </div>
            );
  }
}

ClusterToggleView.propTypes = { 
  mode: React.PropTypes.string,
  thumbElement: React.PropTypes.element.isRequired,
  detailElement: React.PropTypes.element.isRequired,
  detailViewStyle: React.PropTypes.object,
  thumbViewStyle: React.PropTypes.object
};
ClusterToggleView.defaultProps = {
    mode: THUMBNAIL_MODE
  };

export default ClusterToggleView;