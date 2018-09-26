import React, { Component } from 'react';
import { observer } from "mobx-react";
import DevTools from 'mobx-react-devtools';

import Button from './components/Button';

@observer
class Root extends Component {
  render() {
    return (
      <div className="root">
        <DevTools />
        <header className="root-header">
          <h1 className="root-title">Welcome to React</h1>
        </header>
        <p className="root-intro">
          To get started, edit <code>src/Root.js</code> and save to reload.
        </p>
        <Button
          onClick={() => this.props.store.health++}
        >
          hey
        </Button>
        <Button primary>
          primary
        </Button>
        {this.props.store.health}/{this.props.store.maxHealth}
      </div>
    );
  }
}

export default Root;
