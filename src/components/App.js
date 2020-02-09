import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  handleInitialData
} from '../actions/shared';
import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;
    if (loading) {
      return <h3>Loading</h3>
    }

    return (
      <div>
        <ConnectedTodos/>
        <ConnectedGoals/>
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.loading,
}))(App);
