

import AdSectionWrapper from 'parts/AdSectionWrapper';
import Website from 'parts/Website';
import Imdb from 'parts/Imdb';
import Trailer from './Trailer';
import Movie from './Movie';
const MovieAdSection = ({
  websiteUrl,
  imdbId,
  videos,
  playmovie // Piracy is a CRIME, this FORK/UPDATE/TWEAK/COMMIT is for EDUCATIONAL PURPOSE ONLY.
}) => (
  <AdSectionWrapper>
    <Website href={websiteUrl} />
    <Imdb id={imdbId} />
    <Trailer videos={videos} />
    <Movie playmovie={playmovie}/>  
  </AdSectionWrapper>
);

export default MovieAdSection;
