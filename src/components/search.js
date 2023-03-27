import { useState } from 'react';
import '../css/search.css';

export default function Search({ onSearch, initQuery = '', placeholderText = 'What do you want to watch?' }) {
    const [query, setQuery] = useState(initQuery);

    const search = (query) => {
        if (!query) return;
        onSearch(query);
        setQuery('');
    }

    const searchHandler = (e) => {
        switch(e.type) {
            case 'keydown':
                if (e.key === 'Enter') {
                    search(e.target.value);
                }
                break;
            case 'click':
                search(document.querySelector('input.search-input').value);
                break;
            default:
        }
    };

    function changeHandler(e) {
        setQuery(e.target.value);
    }

    return (
        <div className="search-box">
            {/* search component */}
            <div>
                <div>
                    <input
                        className="search-input"
                        type="text"
                        value={query}
                        placeholder={placeholderText}
                        onKeyDown={searchHandler}
                        onChange={changeHandler}
                    ></input>
                </div>
                {/* search button */}
                <div className="btn btn-submit btn-search" onClick={searchHandler} role="button">
                    <div>Search</div>
                </div>
            </div>
        </div>
    );
}
