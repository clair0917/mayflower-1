import React from 'react';
import PropTypes from 'prop-types';

import RichText from '../RichText';
import DecorativeLink from '../../atoms/links/DecorativeLink';

const UtilityPanel = (utilityPanel) => {
  const descriptionClasses = ['ma__utility-panel__description'];
  if (!utilityPanel.links) {
    descriptionClasses.push('ma__utility-panel__description--full');
  }

  return(
    <section className="ma__utility-panel">
      <div className={descriptionClasses.join(' ')}>
        <RichText {...utilityPanel.description} />
      </div>
      <ul className="ma__utility-panel__items">
        {utilityPanel.links.map((decorativeLink, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="ma__utility-panel__item js-clickable" key={index} >
            <DecorativeLink {...decorativeLink} />
          </li>
        ))}
      </ul>
    </section>
  );
};

UtilityPanel.propTypes = {
  /** Text describing the contents of the panel */
  description: PropTypes.shape(RichText.propTypes).isRequired,
  /** Links to display in the panel */
  links: PropTypes.arrayOf(PropTypes.shape(DecorativeLink.propTypes))
};

UtilityPanel.defaultProps = {
  links: []
};

export default UtilityPanel;
