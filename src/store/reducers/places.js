import { 
    ADD_PLACE,
    DELETE_PLACE,
    CREATE_DATA

} from '../actions/actionTypes'

const initialState = {
    places: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(),
                    value: action.placeName,
                    image: {
                        uri: "https://freerangestock.com/sample/78746/halloween-cat-icon-means-trick-or-treat-and-autumn.jpg"
                    }
                })
            }
        
        case DELETE_PLACE:
            return{
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey
                })
            }
        case CREATE_DATA:
            return {
                ...state,
                places: action.payload
            }
        default:
            return state
    }
}

export default reducer

