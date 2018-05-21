import React, { Component, PropTypes } from 'react';
import Grid from '../Grid';


export default class TransactionSummary extends Component {

  render() {
    const { fields, data } = this.props;
    return (
      <Grid.Footer>
        <Grid.Row>
          {
            fields.map((field, index) => {
              return (
                <Grid.Cell
                  text={data[field.mapping]}
                  className={field.className}
                  key={`tf${index}`}
                />
              );
            })
          }
        </Grid.Row>
      </Grid.Footer>
    );
  }
}
