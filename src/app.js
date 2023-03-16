const App = () => {
  const DivNode = document.createElement("div");
  const TextNode = document.createTextNode("렌더링 되는지 확인 해야 해");
  return DivNode.appendChild(TextNode);
};

export default App;
