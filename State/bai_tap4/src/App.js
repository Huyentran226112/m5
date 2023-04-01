import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: ''
    };
  }

  handleChange = (event) => {
    this.setState({ currentItem: event.target.value });
  };

  handleAddItem = () => {
    if (this.state.currentItem !== '') {
      const newItem = {
        text: this.state.currentItem,
        key: Date.now()
      };
      this.setState((prevState) => ({
        items: [...prevState.items, newItem],
        currentItem: ''
      }));
    }
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <input type="text" value={this.state.currentItem} onChange={this.handleChange} />
          <button onClick={this.handleAddItem}>Add</button>
        </div>
        <ul>
          {this.state.items.map((item) => {
            return <li key={item.key}>{item.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
