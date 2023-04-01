import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false
    };
  }

  handle = () => {
    this.setState((prevState) => ({
      isExpand: !prevState.isExpand
    }));
  };

  render() {
    const { isExpand } = this.state;
    return (
      <div>
        <div className="title-wrapper">
          <h1>Conditional Rendering</h1>
        </div>
        {isExpand ? (
          <div>
            <p>Nội dung giới thiệu : hello would</p>
            <button onClick={this.handle}>Đóng giới thiệu</button>
          </div>
        ) : (
          <button onClick={this.handle}>Xem giới thiệu</button>
        )}
      </div>
    );
  }
}

export default App;