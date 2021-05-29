import React from 'react'
import axios from 'axios'
import './style/App.css'
import data from './data/page.json'

class App extends React.Component<{}, { value: string, url: string }>  {
  constructor(props: any) {
    super(props)
    this.state = { value: '', url: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event: any) {
    axios.get(`https://api.1pt.co/addURL?long=${this.state.value}`,)
      .then((response: any) => {
        this.setState({ url: `https://1pt.co/${response.data.short}` })
        console.log(this.state.url)
      })
      .catch(function (error: any) {
        console.log(error)
      });
    event.preventDefault()
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
          <div className="input">
            <input type="text" value={this.state.url} onClick={() => { navigator.clipboard.writeText(this.state.url); alert('Copied') }} />
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