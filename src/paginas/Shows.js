import React from "react";
import axios from "axios";

const API_Filmes = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=91c45c73796db6c6021603e7c3254bac&language=pt-br&page=1"
});

export default class Movie extends React.Component {
  state = {
    movies: [],
    filterFilm: []
  };
  componentDidMount() {
    this.getMovie();
  }

  getMovie = async () => {
    const resposta = await API_Filmes.get();
    const InfosFilm = resposta.data.results.map((item) => {
      return {
        ...item,
        imagem: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
      };
    });
    this.setState({
      movies: InfosFilm,
      filterFilm: InfosFilm
    });
    console.log(InfosFilm);
  };

  procurar = (e) => {
    const { movies } = this.state;
    if (e.target.value === "") {
      this.setState({
        filterFilm: movies
      });
      return;
    }
    const procurandoFilm = movies.filter((item) => {
      if (
        item.origial_title.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({
      filterFilm: procurandoFilm
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Quero assistir..."
          onChange={this.procurandoFilm}
        />

        <h1>Séries para Maratonar</h1>
        <ul>
          {this.state.filterFilm.map((item, id) => (
            <div key={id}>
              <h2>{item.title}</h2>
              <img src={item.imagem} alt={item.title} />
              <p>{item.overview.substring(0, 100)}...</p>
            </div>
          ))}
        </ul>
      </>
    );
  }
}

// import React from "react";
// import axios from "axios";

// //está é o link da api de séries
// const MyAPI_Series = axios.create({
//   baseURL:
//     "https://api.themoviedb.org/3/tv/popular?api_key=91c45c73796db6c6021603e7c3254bac&language=pt-br&page=1"
// });

// export default class Shows extends React.Component {
//   state = {
//     movies: []
//   };

//   getSeries = async () => {
//     const resposta = await MyAPI_Series.get();

//     const InfoSeries = resposta.data.results.map((item) => {
//       return {
//         nomeFilme: item.name,
//         sinopse: item.overview,
//         imagem: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
//       };
//     });
//     this.setState({ movies: InfoSeries });
//   };

//   componentDidMount() {
//     this.getSeries();
//   }

//   render() {
//     return (
//       <>
//         <h1>Páginas de Séries</h1>
//         <ul>
//           {this.state.movies.map((item) => (
//             <>
//               <h2>{item.nomeFilme}</h2>
//               <img src={item.imagem} alt="poster do filme" />
//               <p>{item.sinopse}</p>
//             </>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }
