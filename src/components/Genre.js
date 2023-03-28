import { useState } from 'react';

export const Genre = ({data, onSelect}) => {
  const [activeElement, setActiveElement] = useState(null);

  const clickHandler = (e) => {
    activeElement?.classList.remove("active-genre");
    e.target.classList.add("active-genre");
    setActiveElement(e.target);
    onSelect(e.target.textContent);
  };

  if (!data) return;

  return (
    <div className="genre">
      <div>
        {
          data.map((v, k) => {
            return <div
              onClick={clickHandler}
              className={(activeElement === null && k === 0) ? "active-genre" : ''}
              key={k}
              alt="genre"
            >{v}</div>;
          })
        }
      </div>
    </div>
  );
};
