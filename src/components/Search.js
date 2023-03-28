import { useState } from 'react';
import '../css/search.css';

export default function Search({ onSearch, initQuery = '', placeholderText = 'What do you want to watch?' }) {
    const [query, setQuery] = useState(initQuery);

    const onSearchHandler = event => {
        event.preventDefault();

        if (event.key === 'Enter' || event.type === 'click') {
            onSearch(query);
            setQuery('');
        }
    };

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
                        onKeyDown={onSearchHandler}
                        onChange={e => setQuery(e.target.value)}
                    ></input>
                </div>
                {/* search button */}
                <div className="btn btn-submit btn-search" onClick={onSearchHandler} role="button">
                    <div>Search</div>
                </div>
            </div>
        </div>
    );
}
