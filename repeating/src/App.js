import Div from "./components/div";
import Form from "./components/Form";

function App() {
  const divs = ["Pirmas", "Antras", "Trečias", "Ketvirtas", "Penktas", "Šeštas", "Septintas", "Aštuntas", "Devintas", "Dešimtas", "Vienuolika", "Dvylika", "Trylika", "Keturiolika", "Penkiolika", "Šešiolika"]
  return (
    <div className="container">
      <Form/>
      <div className="row">
        {divs.map((number, i) => <Div key={i} number ={number}/>)}
      </div>
    </div>
  );
}

export default App;
