import React from 'react';
import {Menu, Icon} from 'antd';
import {NavLink as NavLinkRouter} from 'react-router-dom';


const NavContainer = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="shop">
                <NavLinkRouter exact to="/" className="nav-tabs nav-link" activeClassName="active">
                    商城
                </NavLinkRouter>
            </Menu.Item>
            <Menu.Item key="cart">
                <NavLinkRouter exact to="/cart" className="nav-tabs nav-link" activeClassName="active">
                    购物车
                </NavLinkRouter>
            </Menu.Item>
        </Menu>);
}

export default NavContainer;