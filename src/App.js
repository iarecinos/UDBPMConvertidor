import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [dollar, setDollar] = useState(0);
  const [euro, setEuro] = useState(0);
  const [bitcoin, setBitcoin] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setDollar((total * tipo) / 1);
    setEuro((total * tipo) / 1.18);
    setBitcoin((total * tipo) / 46423.50);
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de divisas</h1>

      <p>Dollar: {dollar}</p>
      <p>Euro: {euro}</p>
      <p>Bitcoin: {bitcoin}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dollar</option>
        <option value={1.18}>Euro</option>
        <option value={46423.50}>Bitcoin</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
