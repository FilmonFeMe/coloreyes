import {combineReducers} from 'redux'
import hues from './hue_reducers'

const rootReducer = combineReducers({
    hues
});

export default rootReducer;