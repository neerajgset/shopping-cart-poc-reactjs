import React, { useState, useEffect } from "react";

import { Card, CardImg, CardText, CardBody, Button, CardTitle} from "reactstrap";

const CartItem=({product, addInCart}) =>{
    return(
        <Card className="mt-2 mb-1">
            <CardImg 
            top
            height="250"
            width="100%"
            src={product.smallImage}
            />
            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText className="secondary">price: RS {product.productPrice}</CardText>
            </CardBody>

            <Button 
            color="success"
            onClick={()=> addInCart(product)}
            >Buy Now</Button>
        </Card>
    )

}

export default CartItem;