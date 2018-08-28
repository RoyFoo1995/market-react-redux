import React from 'react';
// import {Card, CardImg, CardText, CardBody, CardTitle, Button, Col} from 'reactstrap';
import {Col, Icon, Card, Avatar} from "antd";


const ShopItem = ({id, barcode, name, unit, price, handleAddItem}) => {
    return (
        <Col span={8}>
            <Card
                cover={<img height={250} width={350} alt="Card image cap" src={`./resources/images/${barcode}.jpg`}/>}
                actions={[<Icon type="shopping-cart" onClick={() =>
                    handleAddItem(true, id)}/>]}>
                <Card.Meta
                    title={name}
                    description={<strong>单价:{price} 元/{unit}</strong>}/>
            </Card>
        </Col>
    );
};

export default ShopItem;