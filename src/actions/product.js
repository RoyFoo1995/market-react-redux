import request from 'superagent'

export const loadProducts = () => {
    return dispatch => {
        request.get('http://localhost:8080/products')
            .end((err, res) => {
                dispatch({
                    type: 'INIT_PRODUCTS',
                    data: res.body
                })
            })
    }
};