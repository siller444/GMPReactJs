export function Items({ items }) {
    return (
        <div className="items">
            {
                items.map((item, key) => {
                    console.log('item key', key);
                    return (<Item key={key} { ...item } />);
                })
            }
        </div>
    );
}

function Item({poster_path, title, release_date, genres}) {
    return (
        <div className="item">
            <div className="poster" key="poster">
                <img src={poster_path} alt="poster" />
            </div>
            <div className="item-additional" key="item-additional">
                <div className="item-title">{title}</div>
                <div className="item-year">
                    {(new Date(release_date)).getFullYear()}
                </div>
            </div>
            <div className="item-genre" key="item-genre">{genres.join(', ')}</div>
        </div>
    );
}
