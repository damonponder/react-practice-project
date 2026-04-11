import Component from "./components/Header";
import headerData from "./data/headerData";

const App = () => {
  
  return (
    <div className='container'>
     <Component data={headerData} />
    </div>
  );
}

export default App;
