import axios from 'axios';
// import api from './axiosInstence';
const BASE_URL = import.meta.env.VITE_BASE_URL;


export const getCategorys = async (fetchcategorydata) => {
    try {
        const response = await axios.get(`${BASE_URL}users/getcategory`);
        fetchcategorydata(response.data);
    } catch (error) {
        console.error("Error fetching categorys:", error);
        throw error;
    }       
}


export const getpopulearProducts = async (fetchProductdata) => {
    try {
        const response = await axios.get(`${BASE_URL}users/getPopular`);
        fetchProductdata(response.data.data);
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }       
}


// export const getProducts = async (fetchProductdata) => {
//     try {
//         const response = await axios.get(`${BASE_URL}users/getProduct`);
//         fetchProductdata(response.data);
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         throw error;
//     }       
// }

export const getcategory = async (fetchProductdata) => {
    try {
        const response = await axios.get(`${BASE_URL}users/getCategory`);
        fetchProductdata(response.data);
    } catch (error) {
        console.error("Error fetching category:", error);
        throw error;
    }       
}

export const getCategorybasedProduct = async (id) => {
    try {
        // console.log(id, "idddddddddddddddddddddd");
        
        const response = await axios.get(`${BASE_URL}users/getCategoryProduct`,  {params:{ id: id} } );

        return response.data;
    } catch (error) {
        console.error("Error fetching category:", error);
        throw error;
    }       
}


export const getSingleProduct = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}users/getSingleProduct`, {
      params: { productId: id },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};


export const getRelatedProduct = async (categoryId) => {
  try {
    const response = await axios.get(`${BASE_URL}users/getRelatedProduct`, {
      params: { id: categoryId },
    });
    console.log(response.data, "related product data>>>>>>>>>>>>");
    
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};



export const getCart = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}users/getCart`, {
      params: { userId: userId },  
    });

    console.log(response.data, "cart data >>>>>>>>>");
    return response.data.cart;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};


export const addCart = async (userId, productId, quantity) => {
  try {
    const response = await axios.post(`${BASE_URL}users/addCart`, {
      userId,
      productId,
      quantity
    });

    console.log(response.data, "cart add response >>>>>>>>>");
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};


