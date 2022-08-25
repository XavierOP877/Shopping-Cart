import "./product.css"


let Product = (props) => {
    return(
        <div className="product-card">
            <div className="product-img">
                <img src={props.data.img} alt="product image"/>
            </div>
            <div className="product-btn">
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Product