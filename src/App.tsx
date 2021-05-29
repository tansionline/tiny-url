import React from 'react'
import './style/App.css'
import data from './data/page.json'

class App extends React.Component<{}, { value: string }>  {
  constructor(props: any) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>{data.header}</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="input">
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder={data.placeholder} />
          </div>
          <div className="button">
            <button type="submit">{data.button}</button>
          </div>
        </form>
      </div>
    );
  }
}
export default App
