import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Gallery.css";

export default function Gallery() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Produto 1", price: "R$ 199,90", description: "Descrição breve do produto 1.", image: "https://placehold.co/300x200" },
        { id: 2, name: "Produto 2", price: "R$ 249,90", description: "Descrição breve do produto 2.", image: "https://placehold.co/300x200" },
        { id: 3, name: "Produto 3", price: "R$ 179,90", description: "Descrição breve do produto 3.", image: "https://placehold.co/300x200" },
        { id: 4, name: "Produto 4", price: "R$ 299,90", description: "Descrição breve do produto 4.", image: "https://placehold.co/300x200" },
        { id: 5, name: "Produto 5", price: "R$ 159,90", description: "Descrição breve do produto 5.", image: "https://placehold.co/300x200" },
        { id: 6, name: "Produto 6", price: "R$ 189,90", description: "Descrição breve do produto 6.", image: "https://placehold.co/300x200" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="gallery-section">
      <h2>Nossos Produtos</h2>

      {loading ? (
        <p className="loading-text">Carregando...</p>
      ) : (
        <div className="gallery-container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      )}
    </section>
  );
}

