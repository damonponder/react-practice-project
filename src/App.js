import Header from "./components/Header";
import headerData from "./data/headerData";

const App = () => {
  return (
    <div className='container'>
     <Header titles={headerData} />
    </div>
  );
}

export default App;
