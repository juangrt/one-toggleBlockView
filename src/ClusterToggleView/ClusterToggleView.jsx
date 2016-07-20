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
    this.getThumbElement = this.getThumbElement.bind(this);
    this.getDetailElement = this.getDetailElement.bind(this);

    if(React.Children.count(this.props.children) > 2){
      throw new Error("Too many Children Elements");
    }
  }


  getThumbElement(){
    if(this.props.thumbElement){
      return this.props.thumbElement;
    } else if(React.Children.count(this.props.children) === 2){
      return this.props.children[0];
    } else {
      throw new Error("No Thumb Element to Render");
    }
  }

  getDetailElement(){
    if(this.props.detailElement){
      return this.props.detailElement;
    } else if (React.Children.count(this.props.children) === 2){
      return this.props.children[1];
    } else {
      throw new Error("No Detail Element to Render");
    }
  }

  onToggleView(event){
    var newMode = this.state.mode === THUMBNAIL_MODE? DETAIL_MODE : THUMBNAIL_MODE;
    this.setState({mode: newMode});
  }

  getView() {
    return (
        <div>
          <ClusterThumbView 
            element={this.getThumbElement()}
            style={this.props.thumbViewStyle}
            onClick={this.onToggleView}/>
          {(() => {
            if(this.state.mode === DETAIL_MODE){
              return <ClusterDetailView 
                        element={this.getDetailElement()}
                        style={this.props.detailViewStyle}
                        onClick={this.onToggleView}/>
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
  thumbElement: React.PropTypes.element,
  detailElement: React.PropTypes.element,
  detailViewStyle: React.PropTypes.object,
  thumbViewStyle: React.PropTypes.object
};
ClusterToggleView.defaultProps = {
    mode: THUMBNAIL_MODE
  };

export default ClusterToggleView;