import Header from "./components/Header";

const headerData = [
  { title: "This is a Title" },
  { title: "This is a Second Title" },
  { title: "This is a Third Title" }
];

const App = () => {
  return (
    <div className='container'>
     <Header titles={headerData} />
    </div>
  );
}

export default App;
