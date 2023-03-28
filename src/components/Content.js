import { Items } from './Items';
import { Sorting } from './Sorting';
import { Genre } from './Genre';
import '../css/content.css';

/** TODO: can be dropped */
import { items } from '../tmp/itemsList';
import { genreList } from '../tmp/genreList';
import { dates } from '../tmp/dates';

export function Content() {
    return (
        <div className="content-wrapper">
          <div className="content">
            
            {/* content header */}
            <div className="content-header">

              {/* genre */}
              <Genre data={genreList} onSelect={(v) => console.log('onSelect', v)} />
              {/* end genre */}

              {/* sorting */}
              <Sorting data={dates} />
              {/* end sorting */}

            </div>
            {/* end content header */}

            <div className="founded">
              <div>
                <strong>39</strong> movies found
              </div>
            </div>

            <Items items={items} />

          </div>
        </div>
    );
}