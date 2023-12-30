function Home() {
  const luckyNumber = Math.floor(Math.random() * 20);
  return <h1>Seu número da sorte é: {luckyNumber}</h1>;
}

export default Home;
