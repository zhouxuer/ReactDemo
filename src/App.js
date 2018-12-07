import React, { Component } from 'react';
import './App.css';


// 页面展示组件
class App extends Component { 
 
  constructor() {
    super()
    this.state = {
      InputValue: "", //输入框输入值
      addData: []     // 数据输入模拟数组
    }
  }
  // 获取输入框的值追加到数组中
  inputData(e) {
    if (e.keyCode === 13) {
      if (this.state.InputValue.trim().length !== 0) {
        let addData = [...this.state.addData];
        const adddData = addData.push({
          title: this.state.InputValue
        })
        this.setState({
          addData: adddData,
        });
       
        this.setState({
          InputValue: "",
        })
      }
    }
  }
  // 清除一条数据按钮事件
  deleteHandler = (index) => {
    let addData = [...this.state.addData];
    const deleteFirstData = addData.splice(index, 1)


    this.setState({
      addData: deleteFirstData,
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
    let ShowData = [...this.state.addData]; 
      ShowData.map((item, index) => < li className = "data-line" >
      {item.title}
      <button
        className = "data-delete" 
        onClick={this.deleteHandler(index)}> X </button> 
    </li>)

     let showContent = null;
     if (this.state.addData.length === 0) {
       showContent = < div className = "content-data-show" >
              <span>暂无数据， 请添加数据 </span>
            </div>;
     } else {
       showContent = < ul className = "data-list-show" >
              {ShowData}
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

          {showContent}

          <span className="delete-all" onClick={() => { this.deleteAll() }}> 清除 </span>
        </div>
      </div>;
  }
  
}

export default App;
