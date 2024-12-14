import { useState } from 'react';
import Router, { useRouter } from 'next/router';
import Modal from 'react-modal';
import QUERY_PARAMS from 'utils/constants/query-params';
import Button from 'components/UI/Button';
import PlayIcon from 'public/assets/svgs/icons/play.svg';

/* 
Notes : 1) package:react-modal-video seems not be working with custom url
 https://github.com/appleple/react-modal-video/issues/30#issuecomment-668177661 
 
Disclaimer : 1) Piracy is a CRIME, this FORK/UPDATE/TWEAK/COMMIT is for EDUCATIONAL PURPOSE ONLY.
*/


// Style for the modal content
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .5)', // Black background with transparency
  },

  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '940px',
    display:'table',
    padding: '0', 
  },
};

const Movie = ({ playmovie }) => {
  const [modalVideoOpened, setModalVideoOpened] = useState(false);
  const { query } = useRouter();
  const movieId = query[QUERY_PARAMS.ID];

  const openModalVideoHandler = () => {
    setModalVideoOpened(true);
  };

  const closeModalVideoHandler = () => {
    setModalVideoOpened(false);
  };
  
  const movieUrl = `https://embed.su/embed/movie/${movieId}`;

  return (
    <>
      <Button
        endIcon={
          <PlayIcon
            fill='currentColor'
            width='0.875em'
          />
        }
        title='Watch Movie'
        onClick={openModalVideoHandler}
      />
      <Modal
        isOpen={modalVideoOpened}
        onRequestClose={closeModalVideoHandler}
        contentLabel='Movie Modal'
        style={modalStyles}
      >
        <div className="iframe-container">
          <iframe
            title="Movie Trailer"
            src={movieUrl}
            allowFullScreen
            className="iframe-player"
          />
        </div>
      </Modal>
      <style jsx>{`
        .iframe-container {
          position: relative;
          padding-bottom: 56.25%;
          height:0;
          width:100%;
          
        }

        .iframe-player {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          
        }

        .modal-content {
          text-align: center;
          
        }

      `}</style>
    </>
  );
};

export default Movie;
