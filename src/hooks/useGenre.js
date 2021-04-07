const useGenre = selectedGenres => {
  if (selectedGenres.length < 1) return '';

  const GenresIds = selectedGenres.map(genre => genre.id);
  return GenresIds.join();
};

export default useGenre;
