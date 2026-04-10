import { useState } from "react";



const Header = ({ titles}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <header style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <h1 style={{ color: "black" }}>
          {titles[currentIndex].title}
        </h1>
      </header>
    <div>
         <p style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          {currentIndex + 1} of {titles.length}
        </p>
    </div>
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button onClick={() => setCurrentIndex(prev => (prev - 1 + titles.length) % titles.length)}>
      Previous
    </button>
      <button style={{ marginLeft: "20px" }} onClick={() => setCurrentIndex(prev => (prev + 1) % titles.length)}>
      Next
    </button>
    </div>
    </div>
  );
};

export default Header;