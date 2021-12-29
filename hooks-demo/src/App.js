import './App.css';
import ContextDemo from './Componets/ContextDemo';
import EffectDemo from './Componets/EffectDemo';
import ReducerDemo from './Componets/ReducerDemo';
import StateDemo from './Componets/StateDemo';

function App() {
  return (
    <div className="App">
      <StateDemo />
      <ReducerDemo />
      <EffectDemo />
      <ContextDemo />
    </div>
  );
}

export default App;
