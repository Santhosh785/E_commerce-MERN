const domain = "http://localhost:5000"


const summaryAPI = {
     signup: {
          url: `${domain}/api/signup`,
          method: "POST"
     },
     signin: {
          url: `${domain}/api/signin`,
          method: "POST"
     },
     current_user: {
          url: `${domain}/api/user-details`,
          method: "GET"
     },
     logout_user: {
          url: `${domain}/api/logout`,
          method: "GET"
     },
     all_users: {
          url: `${domain}/api/all-users`,
          method: "GET"
     },
     update_user: {
          url: `${domain}/api/update-user`,
          method: "POST"
     },
     upload_product: {
          url: `${domain}/api/upload-product`,
          method: "POST"
     },
     get_product: {
          url: `${domain}/api/get-product`,
          method: "GET"
     },
     delete_product: {
          url: `${domain}/api/delete-product`,
          method: "POST"
     },
     addToCart: {
          url: `${domain}/api/addtocart`,
          method: "POST"
     },
     addToCartProductCount: {
          url: `${domain}/api/countAddToCartProduct`,
          method: "GET"
     },
     viewCartProduct: {
          url: `${domain}/api/view-card-product`,
          method: "GET"
     },
     updateCartProduct: {
          url: `${domain}/api/update-cart-product`,
          method: "POST"
     },
     deleteCartProduct: {
          url: `${domain}/api/delete-cart-product`,
          method: "POST"
     },
     searchProduct: {
          url: `${domain}/api/search`,
          method: "GET"
     }

}

export default summaryAPI