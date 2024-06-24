import './App.css';
import Home from './components/Home';

function App() {
  let x = 0
  return (
    <>
    <div>
      <p>hello world!</p>
    </div>
    <Home username='Fira'/>
    <div>
      <p>{x}</p>
      <button onClick={() => 
        {x++
          console.log(x)
        }}>increase</button>
    </div>
    </>
  );
}

export default App;
