import "./preview.css"
import {useParams} from "react-router"
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux"
import {addCreator} from "../redux/action";

let Preview = () => {
    let {id} = useParams();
    let state = useSelector((state)=>state);
    let reqObj = state[id];
    let dispatch = useDispatch();
    return(
        <>
            <div className="preview-container">
                <div className="preview-img-container">
                    <img src={reqObj.img} alt=""/>
                </div>
                <div className="preview-listing">
                    <h2>{reqObj.name}</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus neque ea ipsam, praesentium possimus doloribus vel impedit. Nesciunt quaerat doloremque autem placeat. Eius exercitationem quis excepturi illum, suscipit beatae explicabo.
                    </p>
                    <button 
                    onClick={()=>{
                        dispatch(addCreator(id))
                        alert("Added to Cart!")
                    }}
                    >Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Preview