import * as types from '../../utils/actionTypes'

export const fetchMovieListLoader = () => ({
        type: types.FETCH_MOVIE_LIST_LOADER
});

export function fetchMovieList(page) {
    return dispatch => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=759eb71f56a49a1cb1626e33fab08405&language=en-US&page=${page}`;
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(res => {
                dispatch({
                    type: types.FETCH_MOVIE_SUCCESS,
                    response: res,
                });
            })
            .catch(error => {
                dispatch({
                    type: types.FETCH_MOVIE_FAILURE,
                    response: error,
                });
            });
    };
}



