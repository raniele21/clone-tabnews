import { useState } from "react";
import calculadora from "../models/calculadora";

function Home() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = (operacao) => {
    const valor1 = parseFloat(numero1);
    const valor2 = parseFloat(numero2);

    if (Number.isNaN(valor1) || Number.isNaN(valor2)) {
      setResultado("Erro: informe números válidos");
      return;
    }

    let valor;
    switch (operacao) {
      case "+":
        valor = calculadora.somar(valor1, valor2);
        break;
      case "-":
        valor = calculadora.subtrair(valor1, valor2);
        break;
      case "*":
        valor = calculadora.multiplicar(valor1, valor2);
        break;
      case "/":
        valor = calculadora.dividir(valor1, valor2);
        break;
      default:
        valor = "Erro";
    }

    setResultado(typeof valor === "number" ? `Resultado: ${valor}` : valor);
  };

  return (
    <main style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>Calculadora</h1>
      <div style={{ marginBottom: 12 }}>
        <label>
          Número 1:
          <input
            type="number"
            value={numero1}
            onChange={(event) => setNumero1(event.target.value)}
            style={{ marginLeft: 8 }}
          />
        </label>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>
          Número 2:
          <input
            type="number"
            value={numero2}
            onChange={(event) => setNumero2(event.target.value)}
            style={{ marginLeft: 8 }}
          />
        </label>
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button type="button" onClick={() => calcular("+")}>Somar</button>
        <button type="button" onClick={() => calcular("-")}>Subtrair</button>
        <button type="button" onClick={() => calcular("*")}>Multiplicar</button>
        <button type="button" onClick={() => calcular("/")}>Dividir</button>
      </div>
      <p style={{ marginTop: 20, fontSize: 18 }}>{resultado}</p>
    </main>
  );
}

export default Home;
