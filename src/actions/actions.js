import axios from "axios";

export function loadMovie(){
     return (dispatch) => {
    return axios.get(`http://localhost:5000/peliculas`)
      .then(
        films => {
           axios.get(`http://localhost:5000/personajes`)
            .then(
              people => {
                dispatch(changeMovie(films, people))
              }
            )
        }
      )
  }
}

export function changeMovie(films, people){
    return{
        type:"CHANGE_MOVIE",
        data: {films: films, people: people}
    }
}


