import Product from "./product"
import "./home.css"
import { useSelector } from "react-redux"



let Home = () => {
    let state = useSelector((state)=>state);
    return (
        <>
            <div className="product-container">
                {state.map((el,index)=>(
                    <Product key={index} data={el} />
                ))}
                <button className="shopping-cart-home">
                    <span class="material-symbols-outlined">
                        shopping_cart
                    </span>
                </button>
            </div>
        </>
    )
}

export default Home