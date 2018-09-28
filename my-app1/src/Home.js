//引入React，Component
import React, { Component } from 'react';
//组件继承component
//组件首字母必须大写
class Home extends Component {
  constructor(props) {
    super(props);
   };
  render() {
    console.log(this.props.children);
    let {age,name}=this.props;
    return (
      <div>
           我是子组件，数据如下：
           <hr/>
           年龄：{age}
           <br/>
           姓名：{name}
           <br/>
           {this.props.header}
           <br/>
           {this.props.children}
           <br/>
           {this.props.footer}
      </div>
    );
  }
}

export default Home;
