
import { typesNotes } from "../types/typesNote";

const initialState = { viviendas: [] };

export const viviendasReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesNotes.GET_POSTS:
            return { ...state, viviendas: action.payload };
        case typesNotes.ADD_POST:
            return {
                ...state,
                viviendas: [action.payload, ...state.viviendas]
            };
        case typesNotes.UPDATE_POST:
            return {
                ...state,
                viviendas: [...state.viviendas.map((post) => post.id === action.payload.id ?
                    action.payload : post)]
            }
        case typesNotes.DELETE_POST:
            return {
                ...state,
                vivienda: [...state.viviendas.filter(elem => elem.id !== action.payload)]
            }
        default:
            return { ...state };
    }
}
