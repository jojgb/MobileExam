import { ADD_PLACE, DELETE_PLACE, CREATE_DATA } from './actionTypes'



export const addPlace = placeName => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    }
}

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    }
}

export const createData = (items) => {
    // console.log(items.val())
    if(items.val()){
        var arrData = [];
        var rawData = items.val();
        // var id = Object.keys(rawData)
        
        // console.log(Object.keys(rawData))

        Object.keys(rawData).forEach(id => {
          arrData.push({
            key: id,
            nama: rawData[id].nama,
            usia: rawData[id].usia,
            jabatan: rawData[id].jabatan,
            image: {
              uri:
                "https://freerangestock.com/sample/78746/halloween-cat-icon-means-trick-or-treat-and-autumn.jpg"
            }
          });
        });
        // console.log(arrData)
        return {
          type: CREATE_DATA,
          payload: arrData
        };
    }else {
        return {
            type: CREATE_DATA,
            payload: arrData
          };
    }
    
}