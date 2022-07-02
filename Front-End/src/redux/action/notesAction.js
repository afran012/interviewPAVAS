import {
    apiGetAllData,
    apiDeleteData,
    apiPostData,
    apiPutData,

} from '../lib/api';
import { typesNotes } from "../types/typesNote.js";

//actions sync

export const getPosts = (viviendas) => {
    return ({ 
        type: typesNotes.GET_POSTS, 
        payload: viviendas 
    })
};
export const addPost = (viviendas) => {
    return ({ 
        type: typesNotes.ADD_POST, 
        payload: viviendas 
    })
};
export const updatePost = (vivienda) => ({ type: typesNotes.UPDATE_POST, payload: vivienda });
export const deletePost = (table,id) => ({ type: typesNotes.DELETE_POST, payload: table,id });

//actions async

export const fetchGetPost = (table) => {
    return (dispatch) => {
        apiGetAllData(table)
            .then(res => {
                dispatch(getPosts(res));
            })
            .catch(res => {
                console.log(res);
            })
    }
};

export const fetchAddPost = (table, data) => {
    return async (dispatch) => {
        await apiPostData(table, data)
            .then(res => {
            dispatch(fetchGetPost(table))

            })
            .catch(res => {
                console.log(res)
            })
    }
};

export const fetchUpdatePost = (table, id, data) => {
    return (dispatch) => {
        apiPutData(table, id, data)
            .then(res => {
                dispatch(updatePost(res));
                dispatch(fetchGetPost(table))
            })
            .catch(res => {
                console.log(res);
            })
    }
};

export const fetchDeletePost = (table,id) => {
    return (dispatch) => {
        console.log(table,id);
        apiDeleteData(id)
            .then(res => {
                console.log(deletePost("viviendas",id));
                dispatch(deletePost("viviendas",id));
            })
            .catch(res => {
                console.log(res);
            })
    }
};