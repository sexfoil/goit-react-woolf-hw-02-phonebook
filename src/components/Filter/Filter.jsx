import { Component } from 'react';
import css from './Filter.module.css';

class Filter extends Component {
  handleChange = ({ target: { value } }) => {
    this.props.updateFilter(value);
  };

  render() {
    const { filter } = this.props;
    return (
      <div className={css.search}>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          type="text"
          name="filter"
          id="filter"
          value={filter}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}

export default Filter;
