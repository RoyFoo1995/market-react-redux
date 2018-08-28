import React from 'react';
import {connect} from 'react-redux';
import {Table} from "reactstrap";

import ShopCartItem from './ShopCartItem';
import {regularUpdateItemAction, getAction} from '../reducers/actionTypes';
import {loadShopCart, changeCartNumber} from '../actions/shopCart'

class ShopCart extends React.Component {

    componentDidMount() {
        const {loadShopCart} = this.props;
        loadShopCart();
    }

    render() {
        const {shopCart, handleRegularUpdateCount, handleModifyCount} = this.props;
        return (
            <Table size="sm" hover className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>名字</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>合计</th>
                </tr>
                </thead>
                <tbody>
                {shopCart.map(cartItem => <ShopCartItem {...cartItem} key={cartItem.barcode}
                                                        handleRegularUpdateCount={handleRegularUpdateCount}
                                                        handleModifyCount={handleModifyCount}/>)}
                </tbody>
            </Table>
        )
    }
}

const mapStateToProps = ({shopCart}) => ({
    shopCart
});
const mapDispatchToProps = dispatch => ({
    handleRegularUpdateCount: (item) => dispatch(getAction(regularUpdateItemAction, item)),
    handleModifyCount: (add, id) => changeCartNumber(add, id),
    loadShopCart: () => {
        dispatch(loadShopCart())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);