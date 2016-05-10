/**
 * Created by NekrasovAA on 10.05.2016.
 */
import {combineReducers} from  'redux';
import user from './user';
import page from './page';


export default combineReducers({
    page,
    user
})