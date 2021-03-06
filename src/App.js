import React, { useState, useEffect } from "react";
import logo from  "./images/kognita_logo.png";
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([-1, 1]);
  const [showResult, setShowResult] = useState(false);

  // Caso algo seja escrito na caixa de texto, esconder o resultado, pois ele não seria mais verdadeiro
  useEffect(() => {
    setShowResult(false);
  }, [input]);

  // A função em si a ser implementada
  const compareValues = () => {
    // Separa o input em dois, uma vez que os escores são separados por um 'enter'
    const arr = input.split('\n');
    const a = arr[0].split(' ').map((score) => {return parseInt(score)});
    const b = arr[1].split(' ').map((score) => {return parseInt(score)});
    let result = [0, 0];
    if(a.length !== 3 || b.length !== 3){
      alert("Input em um formato inválido!");
      return;
    }
    a.forEach((_, index) => a[index] > b[index] ? result[0]++ : (b[index] > a[index] ? result[1]++ : null));
    setResult(result);
    setShowResult(true);
  }

  return (
    <div className="app">
      <header className="header">
        <span className="title">Processo Seletivo</span>
        <img className="logo" src={logo} alt="Logo Kognita" />
      </header>
      <div className="body">
        <span>Insira as notas da Rafaela e do Mateus, respectivamente.</span>
        <span>Separe a pontuação da Rafaela da do Mateus um com enter:</span>
          <textarea className="text-input" value={input} onChange={(e) => setInput(e.target.value)} rows="2">
          </textarea>
          <button className="submit-btn" onClick={() => compareValues()}>Enviar resultados</button>
        {showResult ? <div>
          <p>Pontuação final:</p>
          <span>{result[0] + " " + result[1]}</span>
        </div> : null}
      </div>
    </div>
  );
}

export default App;
