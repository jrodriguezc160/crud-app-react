import MovieSearchBox from './MovieSearchBox';

export default function NavBar(props) {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="../../public/index.html">Inicio</a>
        </li>
        <li>
          <a
            href="https://github.com/jrodriguezc160"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&si=xMuFHd3DRzHfmupu"
            target="_blank"
            rel="noreferrer"
          >
            Curso React
          </a>
        </li>
        <li
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MovieSearchBox
            searchValue={props.searchValue}
            setSearchValue={props.setSearchValue}
          />
        </li>
      </ul>
    </div>
  );
}
