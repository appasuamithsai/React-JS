
import './App.css';

function App() {
  const arr=[1,2,3,4,5];
  const double=arr.map((e)=>2*(e))
  return (
    <div className="App">
      {/* {double.map((e)=>e=
      <h4>{e}</h4>)} */}

      {/* {<ul>{double}</ul>} */}

      {double.map(e=><li key={double.id}>{e}</li>)}

      <ol>{double}</ol>
    </div>
  );
}

export default App;
