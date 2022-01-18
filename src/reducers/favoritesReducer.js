import { TOGGLE_FAVORITES, REMOVE_FAVORITE, ADD_FAVORITE} from '../actions/favoritesActions';
const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REMOVE_FAVORITE:
            console.log(state.favorites);
            return {
                ...state,
                favorites: state.favorites.filter(favorite => favorite.id !== action.payload)
            }
        case ADD_FAVORITE:
            console.log(state.favorites);
            return {
                ...state,
                favorites: [...state.favorites, {...action.payload, id: state.favorites.length}]
            }
        case TOGGLE_FAVORITES:
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            }
        default:
            return state;
    }
}

export default reducer;