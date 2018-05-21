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
constructor(props){
    super(props);
    this.state = {
        user: {}
    }
}

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
        <div class="row valign-wrapper">
            <div class="col s2">
              <img src="data:image/png;base64,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" alt="" class="circle responsive-img"/> 
            </div>
            <div class="col s10">
              <span class="black-text">
                <h5>Prosperity Bank: $2,123</h5>
              </span>
            </div>
          </div>

        <h3>Currency</h3>
        <div class="row valign-wrapper">
            <div class="col s2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9cW4XdqQpjJejvmWX0LPuDjwkOhd36k4ePObnf1fsmcuyQkiyQ" alt="" class="circle responsive-img"/> 
            </div>
            <div class="col s10">
              <span class="black-text">
                <h5>Credits: {summary.value ? summary.value  : 0}</h5>
              </span>
            </div>
          </div>


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

function mapStateToProps(state, {auth}) {
  const { transactions } = state;
  return {
    transactions: transactions.transactions,
    summary: transactions.summary,
    gridFields: transactions.transactionsGrid,
    auth: this.auth
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
