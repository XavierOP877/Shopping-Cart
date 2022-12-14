import "./product.css"
import {useHistory} from "react-router"
import {useDispatch} from "react-redux"
import {addCreator} from "../redux/action";

let Product = (props) => {
    let history = useHistory();
    let dispatch = useDispatch();
    return(
        <div className="product-card">
            <div 
            onClick={()=>{
                history.push(`/preview/${props.data.id}`)
            }} className="product-img">
                <img src={props.data.img} alt="product"/>
            </div>
            <div
            onClick={()=>{
                dispatch(addCreator(props.data.id))
                alert("Added to Cart!")
            }}
            className="product-btn">
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Product