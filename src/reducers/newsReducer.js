import data from '../data';
import { FETCH_NEWS, ADD_LIKES,ADD_DISLIKES, ADD_VIEWS } from '../actions/types';

const initialState = {
    items:data
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_NEWS:
            return state;
        case ADD_LIKES:
            var items = [...state.items];
            items[action.payload].likes += 1; 
            return {
                ...state,
                items:items
            };
        case ADD_DISLIKES:
            var newitems = [...state.items];
            newitems[action.payload].dislikes += 1; 
            return {
                ...state,
                items:newitems
            }; 
        case ADD_VIEWS:
            var newsitems = [...state.items];
            newsitems[action.payload].views += 1; 
            return {
                ...state,
                items:newsitems
            };           
        default:
            return state;    
    }
}