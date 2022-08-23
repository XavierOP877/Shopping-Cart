import "./product.css"


let Product = () => {
    return(
        <div className="product-card">
            <div className="product-img">
                <img src="https://rukminim1.flixcart.com/image/416/416/l367dzk0/computer/r/v/p/hp-15s-notebook-hp-original-imagecpfyfatcvaf.jpeg?q=70"/>
            </div>
            <div className="product-btn">
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Product