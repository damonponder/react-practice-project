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
      <header>
        <h1 style={{ color: "black" }}>
          {header[currentIndex].title}
        </h1>
      </header>

      <button onClick={() => setCurrentIndex(prev => (prev + 1) % header.length)}>
        Change Title 
      </button>
    </div>
  );
};

export default Header;