/**
 * Created by NekrasovAA on 10.05.2016.
 */
import {SET_YEAR} from '../constants/Page'
const initialState = {
    year: 2016,
    photos: []
};

export default function pageState(state=initialState, action) {
    switch (action.type){
        case SET_YEAR:
            return{ ...state, year: action.payload};
        default:
            return state;
    }
}