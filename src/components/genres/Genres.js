import React, { useEffect } from 'react';
import tmdb from '../../apis/tmdb';
import { Chip } from '@material-ui/core';

const Genres = ({
  type,
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  setPage,
}) => {
  const onAddGenre = genre => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter(selected => selected.id !== genre.id));
    setPage(1);
  };

  const onRemoveGenre = genre => {
    setSelectedGenres(
      selectedGenres.filter(selected => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await tmdb.get(
      `/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres([]);
    };
  }, []);

  return (
    <div style={{ padding: '6px 0' }}>
      {/* produce selected genres */}
      {selectedGenres.map(genre => (
        <Chip
          key={genre.id}
          label={genre.name}
          style={{ margin: 2, fontWeight: 'bold' }}
          clickable
          size="small"
          color="primary"
          onDelete={() => onRemoveGenre(genre)}
        />
      ))}

      {/* produce unselected genres */}
      {genres.map(genre => (
        <Chip
          key={genre.id}
          label={genre.name}
          style={{ margin: 2, fontWeight: 'bold' }}
          clickable
          size="small"
          onClick={() => onAddGenre(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
