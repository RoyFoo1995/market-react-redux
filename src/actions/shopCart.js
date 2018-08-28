import request from 'superagent'

export const loadShopCart = () => {
    return dispatch => {
        request.get('/orders/1')
            .end((err, res) => {
                dispatch({
                    type: 'INIT_SHOP_CART',
                    data: res.body
                })
            })
    }
};

export const changeCartNumber = (add, productId) => {
    console.log(add + "   " + productId);
    let sendJson = {
        productId,
        count: 1
    };
    if (!add) {
        sendJson.count = -1;
    }
    request.put('http://localhost:8080/orders/1/orderItems')
        .set('Content-Type', 'application/json')
        .send(sendJson)
        .end((err, res) => {
            loadShopCart();
        })
};