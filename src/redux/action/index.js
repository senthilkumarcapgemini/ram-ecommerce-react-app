export const loginUser = (user) => ({
    type: 'LOGIN',
    payload: user,
});

export const logoutUser = () => ({
    type: 'LOGOUT',
});

// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}