import React, { Component } from 'react';
import './App.css';


// 页面展示组件
class App extends Component {

  constructor() {
    super()
    this.state = {
      InputVal: "", //输入框输入值
      dataArr: []     // 数据输入模拟数组
    }
  }
    // 输入框的值发生改变时
    inputChange(e) {
        this.setState({
            InputVal: e.target.value
        })
    }
  // 获取输入框的值追加到数组中
  inputData(e) {
    if (e.keyCode === 13) {
      if (this.state.InputVal.trim().length !== 0) {
          this.state.dataArr.push({
            title: this.state.InputVal,
            id: this.state.InputVal.index
          });
        this.setState({
          InputVal: "",
        })
      }
    }
  }
  // 清除一条数据按钮事件
  deleteFirstData = (e) => {
      console.log(e);
    let dataArr = [...this.state.dataArr];
      dataArr = dataArr.indexOf(e)
    const deleteFirstData = dataArr.splice(dataArr, 1);
    this.setState({
        dataArr: deleteFirstData,
    });
  };
  // 清除全部按钮点击事件
  deleteAll (e) {
    this.setState({
        dataArr: [],
    })
  };
  // 页面渲染
  render() {
      const showData = this.state.dataArr.map((item, index) =>
          < li className="data-line" key={index}>
              {item.title}
              <button
                  className="data-delete"
                  onClick={this.deleteFirstData.bind(item)}> X
              </button>
          </li>);
     let dataContent = null;
     if (this.state.dataArr.length === 0) {
         dataContent = < div className = "content-data-show" >
              <span>暂无数据， 请添加数据 </span>
            </div>;
     } else {
         dataContent = < ul className = "data-list-show" >
           {showData}
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
          value={this.state.InputVal}
          onKeyDown={this.inputData.bind(this)}
        />
          {dataContent}
          <span className="delete-all" onClick={() => { this.deleteAll() }}> 清除 </span>
        </div>
      </div>;
  }

}

export default App;
