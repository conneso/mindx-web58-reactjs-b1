// import logo from './logo.svg';
// import './App.css';
// import Goal from './Goal'

import ClassCom from "./ClassCom";

// function App() {
//   return (
//     <div>App.<Goal isGoal={false}></Goal></div>
//   );
// }

// export default App;

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
//  }
 
 
//  function Header(props) {
//   return (
//       <div>
//           <p>Header:</p>
//           <props.Com name={props.name} />
//           {props.children}
//       </div>
//   );
//  }
 
//  function App() {
//   return (
//       <div>
//           <Header Com={Welcome} name="mindx" >
//               <Welcome name="web58" />
//           </Header>
//       </div>
//   );
//  }
 
 function App() {
  return (
      <div>
          <ClassCom name="mindx"></ClassCom>
      </div>
  );
 }

 export default App;