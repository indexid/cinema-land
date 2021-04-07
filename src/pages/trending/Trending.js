import React, { useEffect, useState } from 'react';
import tmdb from '../../apis/tmdb';
import SingleContent from '../../components/singleContent/SingleContent';
import CustomPagination from '../../components/pagination/CustomPagination';
import './Trending.css';

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    const { data } = await tmdb.get(
      `/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setMovies(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
  }, [page]);

  return (
    <div>
      <div className="pageTitle">Trending Today</div>
      <div className="trending">
        {movies &&
          movies.map(movie => (
            <SingleContent
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title || movie.name}
              date={movie.first_air_date || movie.release_date}
              mediaType={movie.media_type}
              voteAverage={movie.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
