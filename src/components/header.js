import Search from './search';
import {Counter} from './counter';
import '../css/header.css';

export function Header() {
    return (
      <header>
        <div className="head">
          <div>
            <div className="head-name">
              <div><strong>netflix</strong>roulette</div>
            </div>
            <div className="btn btn-secondary">
              <div>+ add movie</div>
            </div>
          </div>
        </div>
        {/* header title */}
        <div className="header-title">
          <div>FIND YOUR MOViE</div>
        </div>
        <Search initQuery='' onSearch={(query) => console.log('onSearch', query)} />
        <Counter startFrom={3} />
      </header>
    );
}
