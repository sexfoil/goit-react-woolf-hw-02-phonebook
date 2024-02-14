import css from './Filter.module.css';

const Filter = ({ filter, updateFilter }) => {
  const handleChange = ({ target: { value } }) => {
    updateFilter(value);
  };

  return (
    <div className={css.search}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Filter;
