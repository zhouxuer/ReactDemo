import React, { Component } from 'react';
import './App.css';

function ShowData(props,index) {
  return <li className = "data-line"> {props.title} 
          <button
            className = "data-delete"> X </button> 
        </li>
}


// 页面展示组件
class App extends Component { 
 
  constructor() {
    super()
    this.state = {
      InputValue: "", //输入框输入值
      addData: []     // 数据输入模拟数组
    }
  }

  inputData(e) {
    // console.log(e);
    if (e.keyCode === 13) {
      if (this.state.InputValue.trim().length !== 0) {
        this.state.addData.push({
          title: this.state.InputValue
        })
        this.setState({
          InputValue: "",
        })
      }
    }
  }
  // 清除一条数据按钮事件
  deleteHandler = (index) => {
    let addData = [...this.state.addData];

    const xxx = addData.splice(index, 1)
    // console.log(this.state.addData.splice(index, 1));


    this.setState({
      addData: xxx,
    });

    console.log(this.state.addData);
  }
  // 清除全部按钮点击事件
  deleteAll = () => {
    this.setState({
      addData: [],
    })
  }
  // 输入框的值发生改变时
  inputChange(e) {
    this.setState({
      InputValue: e.target.value
    })
  }
  // 页面渲染
  render() {
    const isLoggedIn = this.state.addData;
     let button = null;
     if (isLoggedIn !== '') {
       button = <div className="content-data-show">
              <span>暂无数据， 请添加数据 </span>
            </div>;
     } else {
       button = <ul className="data-list-show">
              {this.state.addData.map((item,index) => <ShowData {...item} key={index}></ShowData> )}
            </ul>;
     }
    return <div className="box">
        <div className="nav">
          <h1>Demo02</h1>
        </div>

        <div className="demo-content">
        <input type="text" 
          className="content-data" 
          placeholder="请输入数据" 
          onChange={this.inputChange.bind(this)}
          value={this.state.InputValue}
          onKeyDown={this.inputData.bind(this)}
        />

          {button}
          {/* {isLoggedIn ? (
            <ul className="data-list-show">
              {this.state.addData.map((item,index) => <ShowData {...item} key={index}></ShowData> )}
            </ul>
          ) : (
            <div className="content-data-show">
              <span>暂无数据， 请添加数据 </span>
            </div>
          )} */}

          <span className="delete-all" onClick={() => { this.deleteAll() }}> 清除 </span>
        </div>
      </div>;
  }
  
}

export default App;
