import React from "react";
import isEqual from "react-fast-compare";

class ShouldUpdate extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    return !isEqual(nextProps, this.props) ||
      !isEqual(nextState, this.state);;
  }
};

export default ShouldUpdate;
