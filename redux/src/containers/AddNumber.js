import AddNumber from '../components/AddNumber';
import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    onClick: function (size) {
      dispatch({ type: 'INCREAMENT', size: size });
    },
  };
}

export default connect(null, mapDispatchToProps)(AddNumber);
