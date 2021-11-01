import { combineReducers } from 'redux';
import reviewsReducer from './reviewsReducer';
import restaurantReducer from './restaurantReducer';

const rootReducer = combineReducers({
    reviews: reviewsReducer,
    restaurants: restaurantReducer
})

export default rootReducer;