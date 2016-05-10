/**
 * Created by NekrasovAA on 10.05.2016.
 */
import {SET_YEAR} from '../constants/Page';

export function setYear(year) {
    return{
        type: SET_YEAR,
        payload: year
    }
}