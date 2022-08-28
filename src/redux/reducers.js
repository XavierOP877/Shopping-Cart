

let initialState = [
    {
        id:0,
        name:'IPhone',
        img:"https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
        price:"56000",
        qty:1,
    },
    {
        id:1,
        name:"GT 650",
        img:"https://gaadiwaadi.com/wp-content/uploads/2021/04/modified-Royal-Enfield-GT650-Thailand-1-1068x712.jpg",
        price:"450000",
        qty:1,
    },
    {
        id:2,
        name:"Mercedes Benz",
        img:"https://s1.cdn.autoevolution.com/images/models/MERCEDES-BENZ_GLC-2022_main.jpg",
        price:"4199000",
        qty:1,
    }
]

let reducer = (state=initialState,action) =>{
    switch(action.type){
        case "ADD_TO_CART":
            let cp = state.map((el)=>el);
            let id = action.payload;
            cp[id].qty = cp[id].qty+1;
            return cp;
        case "REMOVE_FROM_CART":
            cp = state.map((el)=>el);
            id = action.payload;
            if(cp[id].qty>0)
                cp[id].qty = cp[id].qty-1;
            return cp
        default:
            return state;
    }
}


export default reducer;