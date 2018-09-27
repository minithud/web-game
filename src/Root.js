import React, { Component } from 'react';
import { observer } from "mobx-react";
import DevTools from 'mobx-react-devtools';
import { Button, ControlGroup } from "@blueprintjs/core";

@observer
class Root extends Component {
  render() {
    return (
      <ControlGroup fill={true} vertical={true}>
        <DevTools />
        <ControlGroup fill={true} vertical={false}>
          <Button
            onClick={() => this.props.store.health++}
          >
            hey
          </Button>
          <div>{this.props.store.health}/{this.props.store.maxHealth}</div>
        </ControlGroup>
        <ControlGroup fill={true} vertical={false}>
          body
        </ControlGroup>
        <ControlGroup fill={true} vertical={false}>

        </ControlGroup>
      </ControlGroup>
    );
  }
}

export default Root;
