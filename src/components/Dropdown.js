import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import '../css/dropdown.css';

export const Dropdown = ({ title, items }) => {
    const [isDropped, setIsDropped] = useState(false);
    
    const openHandler = (e) => {
      const dropdown = document.querySelector('.dropdown-content');
  
      dropdown.classList.toggle("show");
      setIsDropped(dropdown.classList.contains("show"));
    };
  
    return (
      <div className="dropdown" onClick={openHandler}>
        <div className="drop-btn">
          <div>{title}</div>
          <div>
            {
              isDropped 
                ? <FontAwesomeIcon icon={faCaretDown} color="#F65261" transform={{ rotate: 180 }}/>
                : <FontAwesomeIcon icon={faCaretDown} color="#F65261" transform={{ rotate: 0 }}/>
            }
          </div>
        </div>
        <div className="dropdown-content">
          {
            items.map((d, k) => {
              return <div key={k} date={d}>{d}</div>;
            })
          }
        </div>
      </div>
    );
};
