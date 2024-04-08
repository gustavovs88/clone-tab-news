function Home() {
  const luckyNumber = Math.floor(Math.random() * 10);
  const chicoCharacteristics = {
    0: "Querido",
    1: "Guri dos bom",
    2: "Teimoso",
    3: "Nerdola",
    5: "Feliz",
    6: "Sem vergonha",
    7: "Amado",
    8: "Bichinho do mato",
    9: "Filinho da mamãe",
    10: "Filhinho do papai",
  };
  return <h1>Nosso Chico vai ser : {chicoCharacteristics[luckyNumber]}</h1>;
}

export default Home;
