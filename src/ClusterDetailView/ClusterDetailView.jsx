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
    var blockClassNames = classNames('env-block-detail', 
      "env-block-thumb-"+ status);

    this.blockClassNames = blockClassNames;
  }

  render() {
    return (
      <div className={this.blockClassNames}>
        <h1 className="env-block-detail-title">{this.props.environment.name}</h1>
        <div>

        </div>
      </div>
            );
  }
}


export default ClusterDetailView;
