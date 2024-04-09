import { useState, useEffect } from "react";
const numberOfCharacteristics = 18;
const placar = [...Array(numberOfCharacteristics).fill(0)];
let count = 0;

function Home() {
  const chicoCharacteristics = {
    0: "Querido",
    1: "Guri dos bom",
    2: "Teimoso",
    3: "Nerdola",
    4: "Gremista",
    5: "Feliz",
    6: "Sem vergonha",
    7: "Amado",
    8: "Bichinho do mato",
    9: "Filhinho da mamãe",
    10: "Filhinho do papai",
    11: "Carinhoso",
    12: "Parceiro",
    13: "Colorado",
    14: "Atentado",
    15: "Calmo",
    16: "Chorão",
    17: "Dorminhoco",
  };

  const [luckyNumber, setLuckyNumber] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    console.log(luckyNumber);
  }, [luckyNumber]);

  const handleButtonClick = () => {
    if (count >= 15) {
      alert("Veja o resultado!");
      setResult(mapResult());
      count = 0;
      return;
    }
    setResult(null);
    setLuckyNumber(~~(Math.random() * numberOfCharacteristics));
    placar[luckyNumber] += 1;
    count++;
  };

  const mapResult = () => {
    const result = [];
    Object.keys(chicoCharacteristics).forEach((key) => {
      result.push([chicoCharacteristics[key], placar[key]]);
    });
    result.sort((a, b) => b[1] - a[1]);
    return result.filter((item) => item[1] > 0);
  };

  return (
    <>
      <h1>Nosso Chico vai ser : {chicoCharacteristics[luckyNumber]}</h1>
      <button onClick={handleButtonClick}>O que mais ele vai ser?</button>
      {result && (
        <ol>
          Placar:
          {result.map((item, index) => (
            <li key={index}>
              {item[0]}: {item[1]}
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

export default Home;
