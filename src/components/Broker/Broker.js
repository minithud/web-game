import React, {Component} from 'react';
import { observer } from "mobx-react";
import {
    Card
} from '@blueprintjs/core';

import game from '../../state/game';

@observer
class MoneyCount extends Component {
    render() {
        return (
            <div>
                {this.props.game.money}
            </div>
        )
    }
}

class Broker extends Component {
    render() {
        return (
            <Broker className='broker-card'>

            </Broker>
        );
    }
}

export default broker;
