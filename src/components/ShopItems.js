import React from 'react';
import {Row} from "antd";

import {connect} from 'react-redux';
import ShopItem from './ShopItem';
import {loadProducts} from '../actions/product'
import {changeCartNumber} from '../actions/shopCart'


class ShopCart extends React.Component {
    componentDidMount() {
        const {loadProducts} = this.props;
        loadProducts();
    }

    changeTest = (event) => {
        console.log(event.target.value);
    };

    render() {
        return (
            <Row gutter={16}>
                {
                    this.props.shopItems.map(item => <ShopItem key={item.barcode}   {...item}
                                                               handleAddItem={this.props.handleAddItem}/>)}
                <input onChange={::this.changeTest}/>
            </Row>
        )
    }


}

const mapStateToProps = ({shopItems}) => ({
    shopItems
});

const mapDispatchToProps = dispatch => ({
    handleAddItem: (add, id) => {
        changeCartNumber(add, id);
        alert("商品添加成功")
    },

    loadProducts: () => {
        dispatch(loadProducts())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);