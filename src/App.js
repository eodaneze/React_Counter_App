
import './App.scss';
import {useState} from 'react';


function App() {
  const [count, setCount] = useState(0);
  const handleSubstract = () => {
    setCount(count -1)
  }
  const handleAddition = () => {
     setCount(count + 1)
  }
  const handleReset = () => {
     setCount(0)
  }

  let colors = "#fff";
  if(count >= 1){
    colors = "yellow"
  }else if(count < 0){
    colors = "red"
  }else{
    colors = "white"
  }
  return (
     <section className='counter-sec --flex-center'>
        <div className='container counter --card --center-all'>
            <h1 className="--text-light">React Counter App</h1> 
            <p className="count --my2 --text-md --text-light --fw-bold " style={{color:colors}}>{count}</p>
            <div className='buttons'>
                <button className="--btn --btn-danger" onClick={handleSubstract}>- Substract</button>
                <button className="--btn" onClick={handleReset}>! Reset</button>
                <button className="--btn --btn-success" onClick={handleAddition}>+ Add</button>
            </div>
        </div>
     </section>
  );
}

export default App;
