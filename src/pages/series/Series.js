import React, { useEffect, useState } from 'react';
import tmdb from '../../apis/tmdb';
import SingleContent from '../../components/singleContent/SingleContent';
import CustomPagination from '../../components/pagination/CustomPagination';
import Genres from '../../components/genres/Genres';
import './Series.css';
import useGenre from '../../hooks/useGenre';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const fetchSeries = async () => {
    const { data } = await tmdb.get(
      `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );

    setSeries(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSeries();
  }, [page, genreforURL]);

  return (
    <div>
      <div className="pageTitle">TV series</div>
      <Genres
        type="tv"
        genres={genres}
        setGenres={setGenres} // passing setState function to 'Genres' component of not selected genres.
        selectedGenres={selectedGenres} // passing the state to 'Genres'
        setSelectedGenres={setSelectedGenres} // passing setState function to 'Genres' component of selected genres.
        setPage={setPage} // on choosing genres we need to update a number of pages
      />
      <div className="series">
        {series &&
          series.map(movie => (
            <SingleContent
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title || movie.name}
              date={movie.first_air_date || movie.release_date}
              mediaType="tv"
              voteAverage={movie.vote_average}
            />
          ))}

        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        )}
      </div>
    </div>
  );
};

export default Series;
