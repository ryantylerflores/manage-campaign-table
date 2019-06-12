import React from 'react';
import { connect } from 'react-redux';

class DemoPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>{this.props.match.params.type} Page</div>
    )
  }
}

const mapStateToProps = state => {
  return { Data: state.MCReducer.Data }
}

export default connect(mapStateToProps)(DemoPage);