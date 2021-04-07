import React from 'react';
import { Badge } from '@material-ui/core';
import { img_300, unavailable } from '../../config/config';
import ContentModal from '../contentModal/ContentModal';
import './SingleContent.css';

const SingleContent = ({ id, poster, title, date, mediaType, voteAverage }) => {
  return (
    <ContentModal mediaType={mediaType} id={id}>
      <Badge
        badgeContent={voteAverage}
        color={voteAverage > 7 ? 'primary' : 'secondary'}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {mediaType === 'tv' ? 'TV Series' : 'Movie'}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
