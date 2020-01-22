import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../../actions';

import {
  Item,
  Cover,
  Detail,
  Action,
  AddButton,
  PlayButton,
  CheckButton,
} from './styles';

const CarouselItem = (props) => {
  const { isLibrary, id, title, cover, year, contentRating, duration } = props;
  const handleSetFavorite = () => {
    return props.setFavorite({
      id,
      title,
      cover,
      year,
      contentRating,
      duration,
    });
  };

  const handleDeleteFavorite = (itemId) => {
    return props.deleteFavorite(itemId);
  };

  return (
    <Item>
      <Cover src={cover} alt="Video Cover" />
      <Detail>
        <Action>
          <Link to={`/player/${id}`}>
            <PlayButton />
          </Link>
          {!isLibrary ? (
            <AddButton onClick={handleSetFavorite} />
          ) : (
            <CheckButton onClick={() => handleDeleteFavorite(id)} />
          )}
        </Action>
        <h3>{title}</h3>
        <p>{`${year} ${contentRating} ${duration}min`}</p>
      </Detail>
    </Item>
  );
};

CarouselItem.propTypes = {
  isLibrary: PropTypes.bool,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  contentRating: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);