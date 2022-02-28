import axios from "axios";

export const getData = () => {
    return (dispatch) => {
        return axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type:"GET_DATA",
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const getItem = () => {
    return (dispatch) => {
        return axios.get("https://fakestoreapi.com/products/category/jewelery")
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type:"GET_ITEM",
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};

