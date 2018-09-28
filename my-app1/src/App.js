//引入React，Component
import React, { Component } from 'react';
import  Home  from  './Home.js'
//组件继承component
class App extends Component {
  constructor() {
    super();
    this.state={
       age:12,
       name:'mike'
    }
   };
  render() {
    let {age,name}=this.state;
    let  header=<div>头部</div>
    let  footer=<div>底部</div>
    // this.state.age  this.state.name=let {name,age}=this.state;
    return (
      //保证一个跟节点
      <div>
          我是App组件,数据如下:
          <hr/>
          {/*组件首字母要大写 */}
          <Home age={age}  name={name}  header={header}  footer={footer}>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
          </Home>
      </div>
    );
  }
}

export default App;
