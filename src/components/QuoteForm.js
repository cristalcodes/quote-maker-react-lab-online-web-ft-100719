// QuoteForm Component
//   ✓ renders without crashing
//   ✓ always renders a form tag
//   9) always renders a textarea[name="content"] tag for quote content
//   10) always renders a input[name="author"] tag for quote author
//   11) should control its inputs based on internal state
//   12) should handleOnSubmit and preventDefault()
//   13) should reset state after form handleOnSubmit
//   14) should modify the store on handleOnSubmit
import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: '',
    author: ''
  }

  handleOnChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    //
    // console.log(event.target.value)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const quote={...this.state, id: uuid(), votes:0 }  // Create quote object from state
    this.props.addQuote(quote)// Pass quote object to action creator
    this.setState({
      content: '',
      author: ''
    })

    // Update component state to return to default state
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal"  onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name="content"
                        onChange={this.handleOnChange}
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name="author"
                        onChange={this.handleOnChange}
                        className="form-control"
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   addQuote: formData => dispatch({ type: 'ADD_QUOTE', payload: formData })
// })

//add arguments to connect as needed
export default connect(null, { addQuote })(QuoteForm);
