import { ADD_PRODUCT_BASKET} from "./types";

export const addAction = (cartItems, product) => {

    console.log(product.name);
    console.log(cartItems);

    let productAlreadyInCart = false;
    let costOfTheProduct = product.price;
    cartItems.forEach((meal) =>
    {
        if(meal.id === product.id) {
            meal.quantity++;
            productAlreadyInCart = true;
        }
    });

    if(!productAlreadyInCart){
        cartItems.push({...product,quantity:1});
    }

    return(dispatch) => {

        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: {cartItems, costOfTheProduct}
        })
    }

};


