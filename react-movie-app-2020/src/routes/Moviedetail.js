import React, { Component } from 'react';

class Moviedetail extends React.Component {
  componentDidMount() {
    // console.log(this.props.location.state.title);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;

    // location 값이 있는지 없는지 체크 - 없으면 에러
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Moviedetail;
