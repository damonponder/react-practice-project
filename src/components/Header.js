import { useState } from "react";

let header = [
  { title: "This is a Title" },
  { title: "This is a Second Title" },
  { title: "This is a Third Title" }
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <header style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <h1 style={{ color: "black" }}>
          {header[currentIndex].title}
        </h1>
      </header>
    <div>
         <p style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          {currentIndex + 1} of {header.length}
        </p>
    </div>
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button onClick={() => setCurrentIndex(prev => (prev - 1 + header.length) % header.length)}>
      Previous
    </button>
      <button style={{ marginLeft: "20px" }} onClick={() => setCurrentIndex(prev => (prev + 1) % header.length)}>
      Next
    </button>
    </div>
    </div>
  );
};

export default Header;