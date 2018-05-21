import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Body from './Body';
import Row from './Row';
import Cell from './Cell';
import './style.css';


function buildRow(fields, row, rowIndex) {
  return (
    <Row key={`row${rowIndex}`}>
      {
        fields.map((field, cellIndex) => <Cell
          text={row[field.mapping]}
          className={field.className}
          key={`cell${cellIndex}`}
        />)
      }
    </Row>
  );
}

function buildBody(fields, data) {
  return (
    <Body>
        {
          data.map((row, index) => buildRow(fields, row, index))
        }
    </Body>
  );
}

export default class Grid extends Component {

  render() {
    const { fields, data, children } = this.props;
    return (
      <table>
        <Header>
          <Row>
            {
              fields.map((field, index) => {
                return (
                  <Cell
                    text={field.name}
                    key={`th${index}`}
                    className={field.className}
                  />
                );
              })
            }
          </Row>
        </Header>
        { buildBody(fields, data) }
        {children}
      </table>
    );
  }
}
