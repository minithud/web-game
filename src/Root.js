import React, {Component} from 'react';
import DevTools from 'mobx-react-devtools';
import { Button, ControlGroup } from "@blueprintjs/core";
import Header from './components/Header';

class Root extends Component {
  render() {
    return (
      <ControlGroup fill={true} vertical={true}>
        <DevTools />
        <Header />

        <ControlGroup fill={true} vertical={false}>

        </ControlGroup>
      </ControlGroup>
    );
  }
}

export default Root;
