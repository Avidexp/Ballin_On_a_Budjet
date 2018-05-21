import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './Header';
import Grid from './Grid';
import TransactionForm from './TransactionForm';
import TransactionSummary from './TransactionSummary';
import * as AppActions from '../actions';
const ADD_TRANSACTION = 'ADD_TRANSACTION';
const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
const GET_TRANSACTION_GRID_FIELDS = 'GET_TRANSACTION_GRID_FIELDS';
const REQUEST_SUM = 'REQUEST_SUM';

class Budjet extends Component {


  componentWillMount() {
    const { transactions, actions } = this.props;
    actions.requestSum(transactions);
    console.log("BUDGET JS");
    console.log(this.props);
  }

  render() {
    const {
      transactions,
      gridFields,
      summary,
      actions
    } = this.props;

    return (
        <div>
            <div class="row">
            <div class="col s6">
            <div class="card">
            <div class="card-content">
        <h3>Banks</h3>
        {/* <Grid fields={gridFields} data={transactions}>
        <TransactionForm action={actions.addTransaction}/>
        <TransactionSummary data={summary} fields={gridFields} />
        </Grid>  */}
        </div>
        </div>
        </div>
                            
        <div class="col s6">
        <div class="card">
        <div class="card-content">
        <Grid fields={gridFields} data={transactions}>
          <TransactionForm action={actions.addTransaction}/>
          <TransactionSummary data={summary} fields={gridFields} />
        </Grid>
        </div>
        </div>
        </div>


        </div>
        </div>

    );
  }
}

function mapStateToProps(state) {
  const { transactions } = state;
  return {
    transactions: transactions.transactions,
    summary: transactions.summary,
    gridFields: transactions.transactionsGrid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Budjet);
