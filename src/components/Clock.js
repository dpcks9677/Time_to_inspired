import React, { Component } from 'react';

class Clock extends Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timeID = setInterval(() => this.refreshTime(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  refreshTime() {
    this.setState({
      date: new Date(),
    })
  }

  fixZero(time) {
    if(time < 10) {
      return "0"+time;
    } else {
      return time;
    }
  }

  render(){
    return (
      <div class="wrapper">
          <div class="date">{this.state.date.getFullYear()} / {this.fixZero(this.state.date.getMonth()+1)} / {this.fixZero(this.state.date.getDate())}</div>
          <div class="clock">{this.fixZero(this.state.date.getHours())}:{this.fixZero(this.state.date.getMinutes())}:{this.fixZero(this.state.date.getSeconds())}</div>
      </div>
    );
  }
}

export default Clock; 