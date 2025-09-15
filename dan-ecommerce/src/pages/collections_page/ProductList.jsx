import React from "react";
import ProductListCard from "../../components/cards/ProductListCard";
import drinkpurple from "../../assets/images/collections_page/drinkpurple.png"
import drinkgreen from "../../assets/images/collections_page/drinkgreen.png"
import drinkyellow from "../../assets/images/collections_page/drinkyellow.png"

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
];

const ProductList = ({ isOpen }) => {
  return (
    <div className="w-full h-full flex flex-wrap justify-between">
      {products.slice(0, isOpen  ? 9: 12 ).map((product) => (
        <ProductListCard
         id={product.id}
         title={product.title}
         image={product.image}
         price={product.price}
         isOpen= {isOpen} />
      ))}
    </div>
  );
};

export default ProductList;
