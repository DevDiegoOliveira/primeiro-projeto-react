import List from "./Components/List/List";


function App() {

  const users = [
    {
      id: 0,
      name: "Vinicius"
    },
    {
      id: 1,
      name: "Maria"
    },
    {
      id: 2,
      name: "João"
    }


  ]

  return (
    <div>
      <h1>Olá</h1>
      <List items={users}/>
    </div>
  );
}

export default App;
