import React, {Component} from 'react';
import { observer } from "mobx-react";
import {
    Alignment,
    AnchorButton,
    Classes,
    Navbar,
    NavbarGroup,
    NavbarHeading,
    NavbarDivider
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

class Header extends Component {
    render() {
        return (
            <Navbar
                className={Classes.DARK}
                fixedToTop
            >
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>Cash+</NavbarHeading>
                    <NavbarDivider />
                    <MoneyCount
                        game={game}
                    />
                </NavbarGroup>
            </Navbar>
        );
    }
}

export default Header;
