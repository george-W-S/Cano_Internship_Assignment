import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Page.css";
import productsData from "./Products.json";

const Products: React.FC = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleFilter = (filter: string) => {
    setFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        if (filter === "ascending" && prevFilters.includes("descending")) {
          return prevFilters.filter((f) => f !== "descending");
        }
        if (filter === "descending" && prevFilters.includes("ascending")) {
          return prevFilters.filter((f) => f !== "ascending");
        }
        return [...prevFilters, filter];
      }
    });
  };

  const sortedProducts = productsData.sort((a, b) => {
    if (filters.includes("ascending")) {
      return a.environmental_impact.localeCompare(b.environmental_impact);
    } else if (filters.includes("descending")) {
      return b.environmental_impact.localeCompare(a.environmental_impact);
    }
    return 0;
  });

  let filteredProducts = sortedProducts.filter((product) =>
    filters.includes(product.category.toLowerCase())
  );

  if (searchQuery.trim() !== "") {
    filteredProducts = sortedProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="page-container">
        <div className="page-content">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>PRODUCTS</div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              style={{
                marginRight: "20px",
                marginTop: "20px",
                color: "red",
                borderColor: "red",
                backgroundColor: "black",
              }}
            />
          </div>
        </div>
      </div>
      <div className="filters-container">
        <button
          style={{ fontFamily: "Orbitron, sans-serif" }}
          className={filters.includes("organics") ? "active" : ""}
          onClick={() => toggleFilter("organics")}
        >
          Organics
        </button>
        <button
          style={{ fontFamily: "Orbitron, sans-serif" }}
          className={filters.includes("synthetics") ? "active" : ""}
          onClick={() => toggleFilter("synthetics")}
        >
          Synthetics
        </button>
        <button
          style={{ fontFamily: "Orbitron, sans-serif" }}
          className={filters.includes("artificials") ? "active" : ""}
          onClick={() => toggleFilter("artificials")}
        >
          Artificials
        </button>
        <button
          style={{ fontFamily: "Orbitron, sans-serif" }}
          className={filters.includes("ascending") ? "active" : ""}
          onClick={() => toggleFilter("ascending")}
        >
          Ascending
        </button>
        <button
          style={{ fontFamily: "Orbitron, sans-serif" }}
          className={filters.includes("descending") ? "active" : ""}
          onClick={() => toggleFilter("descending")}
        >
          Descending
        </button>
      </div>
      <div className="products-container">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-item">
            <div className="product-container">
              <h2 style={{ fontFamily: "Orbitron, sans-serif", color: "red" }}>
                {product.name}
              </h2>
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
              <p className="fira-code">Category: {product.category}</p>
              <p className="fira-code">
                Environmental Impact: {product.environmental_impact}
              </p>
              <p className="fira-code">Price: {product.price}</p>
            </div>
            <div className="product-description">
              {product.description.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="copyright">
        Copyright © 2025-2049 Wallace Corporation - All Rights Reserved
      </div>
    </div>
  );
};

export default Products;
