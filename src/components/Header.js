import { useState } from "react";
import "../css/Header.css";

const Component = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="container">
      <div className="card">
          <h1 className="title">
            {data[currentIndex].title}
          </h1>

          <p>
            {data[currentIndex].item}
          </p>
      
      <div>
        <button 
          className="button"
          onClick={() => 
          setCurrentIndex(prev => (prev - 1 + data.length) % data.length)
          }
        >
        Previous
        </button>

        <button
          className="button button-spacing"
          onClick={() => 
          setCurrentIndex(prev => (prev + 1) % data.length)
          }
        >
        Next
        </button>
      </div>
    </div>
  </div>
  );
};

export default Component;