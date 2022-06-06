import React from 'react';

class ClassCom extends React.Component {
   constructor(props) {
       super(props);
       this.state = { date: new Date(), clickCount: 0 };
   }
   _handleClick = () => {
       this.setState({
           clickCount: this.state.clickCount + 1
       }, () => {
           console.log('this.state.clickCount_2', this.state.clickCount)
       })
       console.log('this.state.clickCount_1', this.state.clickCount)
   }
   render() {
       return (
           <div>
               <h1>Click Count <button onClick={this._handleClick}>Click {this.props.name}</button></h1>
               <h2>{this.state.clickCount}</h2>
           </div>
       );
   }
}

export default ClassCom

//Cách khai báo component: function return về mã html/extends React.Component
//Component: có thuộc tính props
//Component: có state, setState
//Component: có thể binding và handle events