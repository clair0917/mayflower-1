import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FilterBox from '../../organisms/FilterBox';
import HeaderSearch from '../../molecules/HeaderSearch';
import SvgChevron from '../../atoms/icons/SvgChevron';
import Tabs from '../../molecules/Tabs';
// eslint-disable-next-line import/no-unresolved
import './style.css';

class SearchBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterBoxExpanded: false
    };
    this.toggleFilterBox = this.toggleFilterBox.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { filterBoxExpanded } = nextProps;
    if (this.state.filterBoxExpanded !== filterBoxExpanded) {
      this.setState({ filterBoxExpanded });
    }
  }
  toggleFilterBox() {
    this.setState((prevState) => ({ filterBoxExpanded: !prevState.filterBoxExpanded }));
    if (typeof this.props.toggleButtonOnClick === 'function') {
      this.props.toggleButtonOnClick(this.state.filterBoxExpanded);
    }
  }
  render() {
    const { tabs, searchBox, filterBox } = this.props;
    let submitButton;

    if (filterBox) {
      const outerClickHandler = filterBox.submitButton.onClick;
      submitButton = {
        ...filterBox.submitButton,
        onClick: (e) => {
          this.toggleFilterBox();
          outerClickHandler(e);
        }
      };
    }

    const toggleButtonClass = `ma__search-banner__filter-box-toggle ${this.state.filterBoxExpanded && 'ma__search-banner__filter-box-toggle--expanded'}`;
    return(
      <div className={`ma__search-banner__top ${!tabs && 'ma__search-banner__top--noTabs'}`}>
        <div className="main-content--two">
          <h2 className="visually-hidden">Search Form</h2>
          <HeaderSearch {...searchBox} />
        </div>
        {tabs && <Tabs {...tabs} />}
        {filterBox && (
          <div className="main-content--two ma__search-banner__filter-box-toggle-container">
            <button onClick={this.toggleFilterBox} type="button" className={toggleButtonClass}>
              More Filters
              <SvgChevron />
            </button>
          </div>
        )}
        { filterBox && this.state.filterBoxExpanded && <FilterBox {...filterBox} submitButton={submitButton} /> }
      </div>
    );
  }
}

SearchBanner.propTypes = {
  /** @molecules/HeaderSearch */
  searchBox: PropTypes.shape(PropTypes.HeaderSearch).isRequired,
  /** @molecules/Tabs */
  tabs: PropTypes.shape(PropTypes.Tabs),
  /** @organisms/FilterBox */
  filterBox: PropTypes.shape(PropTypes.FilterBox),
  /** filterbox toggle button custom function */
  toggleButtonOnClick: PropTypes.func,
  /** Controls if filterBox is expanded */
  filterBoxExpanded: PropTypes.bool
};

export default SearchBanner;
