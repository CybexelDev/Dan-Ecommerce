import React, { useEffect, useState } from "react";
import ProductListCard from "../../components/cards/ProductListCard";
import drinkpurple from "../../assets/images/collections_page/drinkpurple.png";
import drinkgreen from "../../assets/images/collections_page/drinkgreen.png";
import drinkyellow from "../../assets/images/collections_page/drinkyellow.png";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, title: "Food & Beverages", image: drinkgreen, price: "$20.00" },
  { id: 2, title: "Product 2", image: drinkpurple, price: "$25.99" },
  { id: 3, title: "Product 3", image: drinkyellow, price: "$30" },
  { id: 4, title: "Product 4", image: drinkgreen, price: "$35" },
  { id: 5, title: "Product 5", image: drinkpurple, price: "$40" },
  { id: 6, title: "Product 6", image: drinkyellow, price: "$45" },
  { id: 7, title: "Product 7", image: drinkpurple, price: "$50" },
  { id: 8, title: "Product 8", image: drinkgreen, price: "$55" },
  { id: 9, title: "Product 9", image: drinkyellow, price: "$60" },
  { id: 10, title: "Product 10", image: drinkyellow, price: "$65" },
  { id: 11, title: "Product 11", image: drinkgreen, price: "$70" },
  { id: 12, title: "Product 12", image: drinkyellow, price: "$75" },
  { id: 4, title: "Product 4", image: drinkgreen, price: "$35" },
  { id: 5, title: "Product 5", image: drinkpurple, price: "$40" },
  { id: 6, title: "Product 6", image: drinkyellow, price: "$45" },
  { id: 7, title: "Product 7", image: drinkpurple, price: "$50" },
  { id: 8, title: "Product 8", image: drinkgreen, price: "$55" },
  { id: 9, title: "Product 9", image: drinkyellow, price: "$60" },
  { id: 10, title: "Product 10", image: drinkyellow, price: "$65" },
  { id: 11, title: "Product 11", image: drinkgreen, price: "$70" },
  { id: 12, title: "Product 12", image: drinkyellow, price: "$75" },
];

const ProductList = ({ isOpen, productData, productLengthdata }) => {

  const [product, setProduct] = useState([])


  console.log(product, "productData in product list rrrrrrrrrrrrrr");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setProduct(productData.data);
    };

    fetchProducts();
  }, [productData]);


    useEffect(() => {
    if (product) {
      productLengthdata(product.length);
    }
  }, [product]);


  return (
    <div className="w-full h-full flex flex-wrap justify-between">
      {product?.slice(0, isOpen ? 9 : 12)?.map((product) => (
        <ProductListCard
          click={() => navigate(`/product/${product._id}`)}
          id={product._id}
          title={product.productName}
          image={product.images[0]}
          price={product.rate}
          isOpen={isOpen} />
      ))}
    </div>
  );
};

export default ProductList;
