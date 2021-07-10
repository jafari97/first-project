import React from 'react'
import './Product.css'


const Product = (props) => {
    return (
        <div className="Product">
            <p>first name:{props.fname}</p>
            <h5> last name:{props.lname}</h5>
            <p onClick={props.click}>age:</p>
            <h2>{props.children}</h2>

        </div>

    )

}

export default Product