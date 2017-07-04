import React from 'react';

class InputLine extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      typedText:""
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.submit(this.state.typedText)
    this.setState({
      typedText: ""
    })
  }

  handleTyping(event) {
    this.setState({
      typedText: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type="text"
          placeholder="task"
          onChange={(event) => this.handleTyping(event)}
          value={this.state.typedText}
        />
        <input
          type="submit"
          value="Add todo"
        />
      </form>
    )
  }
}

export default InputLine;
