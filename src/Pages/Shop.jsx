import React, { useState } from 'react'
import "./Shop.css"
const Shop = () => {
  const products = [
    { id: 1, image:"./images/Products/Product1.jpeg", category:"Dog Food", name: "Galox size Dog Food", price: 20.99 },
    { id: 2, image:"./images/Products/Product2.jpeg", category:"Dog Food", name: "DBT Feet Dog Food", price: 18.49 },
    { id: 3, image:"./images/Products/Product3.jpeg", category:"Dog Food", name: "Dog Press ", price: 15.99 },
    { id: 4, image:"./images/Products/Product4.jpeg", category:"Dog Food", name: "Food Pldeo", price: 12.99 },
    { id: 5, image:"./images/Products/Product5.jpeg", category:"Dog Food", name: "Finasita Food", price: 22.49 },
    { id: 6, image:"./images/Products/Product6.jpeg", category:"Dog Food", name: "Docklet's", price: 10.99 },
    { id: 7, image:"./images/Products/Product7.jpeg", category:"Dog Food", name: "Foot Sod Honksitay", price: 9.49 },
    { id: 8, image:"./images/Products/Product8.jpeg", category:"Dog Food", name: "Splem Couce", price: 19.99 },
    { id: 9, image:"./images/Products/Product9.jpeg", category:"Cat Food", name: "Cetrris Cat Food", price: 25.99 },
    { id: 10, image:"./images/Products/Product10.jpeg", category:"Cat Food", name: "Gran Free Bites", price: 7.99 },
    { id: 11, image:"./images/Products/Product11.jpeg", category:"Dog Toy", name: "Dino and Ball Toy", price: 20.99 },
    { id: 12, image:"./images/Products/Product12.jpeg", category:"Dog Toy", name: "Teddy Toy", price: 14.99 },
    { id: 13, image:"./images/Products/Product13.jpeg", category:"Dog Toy", name: "Dog toy", price: 16.49 },
    { id: 14, image:"./images/Products/Product14.jpeg", category:"Dog Toy", name: "Bone Toys", price: 21.99 },
    { id: 15, image:"./images/Products/Product15.jpeg", category:"Cat Toy", name: "Woolen ball", price: 8.49 },
    { id: 16, image:"./images/Products/Product16.jpeg", category:"Cat Toy", name: "Feather & ball", price: 23.99 },
    { id: 17, image:"./images/Products/Product17.jpeg", category:"Cat Toy", name: "Cat Mouse Toy", price: 13.99 },
    { id: 18, image:"./images/Products/Product18.jpeg", category:"Cat Food", name: "Ciynis Cat Food", price: 11.49 },
    { id: 19, image:"./images/Products/Product19.jpeg", category:"Dog Leash", name: "Dog belt", price: 17.99 },
    { id: 20, image:"./images/Products/Product20.jpeg", category:"Dog Leash", name: "Leather Dog Belt", price: 18.99 },
    { id: 21, image:"./images/Products/Product21.jpeg", category:"Dog Leash", name: "Leather Dog Belt", price: 8.49 },
    { id: 22, image:"./images/Products/Product22.jpeg", category:"Cat Leash", name: "Leather Cat Belt", price: 23.99 },
    { id: 23, image:"./images/Products/Product23.jpeg", category:"Cat Leash", name: "Rope Cat Belt", price: 13.99 }
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Dog Food", "Cat Food", "Dog Leash", "Cat Leash"]; // Define categories

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  
  
  return (
    <>
    <div className="product-main">
        <div className="filter">
          <select className="filterbtn" onChange={handleCategoryChange}>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="shoplogo">
          <img src="public/images/Shoplogo.jpeg" alt="" className="shoplogoimg" />
        </div>
        <div className="product-container">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img className='product' src={product.image} alt={product.name} />
              <h1 className='headptext'>{product.name}</h1>
              <p>Price: ${product.price}</p>
              <button className="buy">Buy</button>
            </div>
          ))}
        </div>
      </div>
      
    </>
  )
}

export default Shop