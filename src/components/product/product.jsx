import React from "react";
import './product.scss';
import { NavLink } from "react-router-dom";

function Products({product}){

    return (
        <>
            <div className="product">
                {product.vector == null ? '':<img className="vector" src={product.vector} alt="vector" />}
                <img className="product-image" src={product.img} alt="product img" />
                <h5>{product.name}</h5>
                <div>
                    <h5 className="product-size"><span className="icon-arrows-up-down-solid"/>
                    {product.sm[0]} <span className="icon-arrows-left-right-to-line-solid"/> {product.sm[1]}</h5>
                    <h5><span className="icon-layer-group-solid"/>{product.shert} շերտ</h5>
                    <h5><span className="icon-layer-group-solid"/>{product.hat} հատ</h5>
                </div>
                <NavLink to={{pathname:'/aboutProduct'}} state={product}  > Տեսնել Ավելին</NavLink>
            </div>
        </>
    )
}

export default Products;