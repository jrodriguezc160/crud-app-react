import MovieSearchBox from './MovieSearchBox';

export default function NavBar(props) {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/index.html">
            <img
              src="/logo512.png"
              alt="react-logo"
              style={{ width: '16px', height: '16px' }}
            />
          </a>
        </li>

        <li className='hideable'>
          <a href="../../public/index.html">Inicio</a>
        </li>

        <li className='hideable'>
          <a
            href="https://github.com/jrodriguezc160"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>

        <li className='hideable'>
          <a
            href="https://youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&si=xMuFHd3DRzHfmupu"
            target="_blank"
            rel="noreferrer"
          >
            Curso React
          </a>
        </li>

        <li className='hideable'>
          <MovieSearchBox
            searchValue={props.searchValue}
            setSearchValue={props.setSearchValue}
          />
        </li>
      </ul>
    </div>
  );
}
