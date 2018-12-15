import { FETCH_NEWS,ADD_LIKES,ADD_DISLIKES, ADD_VIEWS } from './types';

export function fetchNews(){
    return {
        type:FETCH_NEWS
    }
}

export function incLikes(id){
    return{
        type:ADD_LIKES,
        payload:id-1
    }
}

export function incDislikes(id){
    return{
        type:ADD_DISLIKES,
        payload:id-1
    }
}

export function incViews(id){
    return{
        type:ADD_VIEWS,
        payload:id-1
    }
}