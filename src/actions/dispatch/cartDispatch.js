export function cartDispatch(cart, action) {
    console.log(cart);
    switch(action.type) {
        case 'add':
            let isIncludes
            const newCart = cart.map(product => {
                if (product.id === action.payload.id) {
                    isIncludes = true
                    return {
                        ...product,
                        count: product.count + action.payload.count
                    }
                }
                return product
            });
            if (isIncludes) {
                return newCart
            } else {
                return [
                    ...cart,
                    action.payload
                ]
            }
        default:
            return cart
    }
}