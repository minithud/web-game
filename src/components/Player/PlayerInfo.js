import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

class PlayerInfo extends Component {
  render() {
    return (
      <Container>

      </Container>
    )
  }
}
export default PlayerInfo;
