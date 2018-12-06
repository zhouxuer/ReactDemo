import React, { Component } from 'react';
import './App.css';

function ShowData(props) {
  return<li className="data-line">{props.title}</li>
}



// 页面展示组件
class App extends Component { 
  // 数据输入模拟数组
  constructor() {
    super()
    this.state = {
      inputData:[
        {
          title:'111',
        },
        {
          title:'222333',
        }
      ]
    }
  }
  render() {
    return <div className="box">
        <div className="nav">
          <h1>Demo02</h1>
        </div>

        <div className="demo-content">
        <input type="text" className="content-data" placeholder="请输入数据" onChange={() => { this.valueChanged() }}/>

          <div className="content-data-show">
            <span>暂无数据， 请添加数据 </span>
          </div>

          <ul className="data-list-show">
            {this.state.inputData.map(item => <ShowData {...item} key='action'></ShowData>)}
          </ul>

          <span className="delete-all" onClick={() => { this.delete() }}> 清除 </span>
        </div>
      </div>;
  }
  valueChanged = () => {
    console.log("222");
  }
  // 清除按钮点击事件
  delete = () => {
    console.log('111')
  }
}

export default App;
