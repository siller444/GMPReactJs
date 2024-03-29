import { Dropdown } from './Dropdown';

export const Sorting = ({ data }) => {
    return (
      <div className="sorting">
        <div>
          <div>Sort by</div>
          <Dropdown title="release date" items={data} />
        </div>
      </div>
    );
};
