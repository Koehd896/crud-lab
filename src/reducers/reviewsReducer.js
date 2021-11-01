export default function manageReviews (state = {
    reviews: []
}, action) {
    switch (action.type) {
        case "ADD_REVIEW":
            return {reviews: state.reviews.concat(action.review)}
        default:
            return state
    }
}