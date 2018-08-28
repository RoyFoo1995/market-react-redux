import React, {Component} from 'react';
import {InputGroup, InputGroupText, InputGroupAddon, Input} from 'reactstrap';

const ENTER_KEY_CODE = 13;

class ShopCartItem extends Component {
    state = {
        tempCount: this.props.count
    };
    modifyItemCount = (count) => {
        this.setState({tempCount: count});
    };

    render() {
        let {id, barcode, name, price, count, handleRegularUpdateCount, handleModifyCount} = this.props;
        return (<tr>
            <td scope="row">
                <Input addon type="checkbox" aria-label="Checkbox for following text input"/>
            </td>
            <td>{name}</td>
            <td><span className="fa fa-dollar-sign">&nbsp;</span>{price}</td>
            <td className="cart-count">
                <InputGroup size="sm">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText onClick={() => {
                            handleRegularUpdateCount({barcode, count: -1})
                            this.modifyItemCount(false,);
                            handleModifyCount(false, id);
                        }}><span className="fa fa-minus"/></InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="count" type="number" min="0" value={count}
                           onKeyPress={(event) => {
                               if (event.charCode === ENTER_KEY_CODE) {
                                   handleModifyCount(true, id)
                               }
                           }} onBlur={() => {
                        handleModifyCount({barcode, count: this.state.tempCount})
                    }} onChange={(event) => {
                        this.modifyItemCount(event.target.value);
                    }}/>
                    <InputGroupAddon addonType="append">
                        <InputGroupText onClick={() => {
                            handleRegularUpdateCount({barcode, count: 1});
                            this.modifyItemCount(parseInt(this.state.tempCount) + 1);
                            handleModifyCount(true, id);
                        }}><span className="fa fa-plus"/></InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </td>
            <td className='cart-sum'>&nbsp;&nbsp;&nbsp;&nbsp;<span
                className="fa fa-dollar-sign">&nbsp;&nbsp;</span>{price * count} </td>
        </tr>);
    }
}

export default ShopCartItem;
