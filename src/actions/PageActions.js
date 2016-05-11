import {GET_PHOTO_REQUEST, GET_PHOTO_SUCCESS} from '../constants/Page'

export function getPhotos(year) {
    return (dispatch)=> {
        dispatch({
            type: GET_PHOTO_REQUEST,
            payload: year
        });

        setTimeout(()=> {
            dispatch({
                type: GET_PHOTO_SUCCESS,
                payload: [1, 2, 3, 4, 5]
            })
        },1000)
    }
}