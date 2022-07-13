import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/Input';
import { FilterContainer } from './Filter.styled';

export class Filter extends Component {
  state = { value: '' };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value: value });
    this.props.onFilter(value);
  };

  render() {
    const { value } = this.state;
    return (
      <FilterContainer>
        <Input
          name="filter"
          type="search"
          value={value}
          onChange={this.handleChange}
        />
      </FilterContainer>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
