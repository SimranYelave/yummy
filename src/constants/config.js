// export const restaurantdata =[
//     {
//       name:"Pizza Hut",
//       rating:4.2,
//       deliveryTime:"30 min",
//       cuisines:"Italian, Mexican",
//       location:"Ghatkopar"
//     },
//     {
//       name:"Bharat cafe",
//       rating:4.8,
//       deliveryTime:"40 min",
//       cuisines:"Indian, Chinese",
//       location:"Bhandup"
//     },
//     {
//       name:"Pravin",
//       rating:4.5,
//       deliveryTime:"25 min",
//       cuisines:"Pickles, Papad",
//       location:"Thane"
//     },
//     {
//       name:"Naturals Ice Cream",
//       rating:4.9,
//       deliveryTime:"2 min",
//       cuisines:"Desserts",
//       location:"Ghatkopar"
//     },
//     {
//       name:"Artificial Ice Cream",
//       rating:4.0,
//       deliveryTime:"2 hrs",
//       cuisines:"Tandoor Desserts",
//       location:"Ghatkopar"
//     },
//     {
//       name:"Chinese Wok" ,
//       rating:4.4,
//       deliveryTime:"35-40 min",
//       cuisines:"Chinese ,Tandoor, South Indian",
//       location:"Ghatkopar"
//     },

//   ]


export const CAROUSEL_DEALS_IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/"
export const  generateMenuURL = (id) => {
    return `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.10205&lng=72.9087744&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
}
export const CAROUSEL_IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"
export const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
export const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.10205&lng=72.9087744&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";