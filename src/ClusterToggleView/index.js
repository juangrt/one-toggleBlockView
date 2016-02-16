import React from 'react';
import ClusterThumbView from '../ClusterThumbView';


//Default state
//mode : Thumbnail | Detail

let THUMBNAIL_MODE = "thumbnail";
let DETAIL_MODE    = "detail";

class ClusterToggleView extends React.Component{
  constructor(props) {
    super(props);

    //Create event binding here
    //this.onToggleView = this.tick.bind(this.onToggleView);
  }

  onToggleView(event){
    console.log(event);
    this.props.mode = this.props.mode === THUMBNAIL_MODE? DETAIL_MODE : THUMBNAIL_MODE;
    this.render();
  }

  getView() {
    if(this.props.mode === THUMBNAIL_MODE) {
      return <ClusterThumbView data={this.props.mode}></ClusterThumbView>
    } else {
      return <h1>Hey Buddy</h1>
    }
  }

  render() {

    return (
      <div>
        <button onClick={this.onToggleView} >Toggle View</button>
        {this.getView()}
      </div>
            );
  }
}

ClusterToggleView.defaultProps = {
    mode: DETAIL_MODE
  };




//Events management

//Display Data

//Template?


export default ClusterToggleView
