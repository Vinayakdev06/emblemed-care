import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductsPage({ previewOnly }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data.products || []))
      .catch(err => console.error(err));
  }, []);

  const items = products;
  const display = previewOnly ? items.slice(0, 4) : items;

  return (
    <section id="products" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Our Products</h2>
        {!previewOnly && (
          <Link to="/products" className="text-brand underline hover:text-brand-dark">
            View all
          </Link>
        )}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {display.map(p => (
          <div
            key={p.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <div className="bg-gray-50 p-3 rounded-lg h-48 flex items-center justify-center">
              <img
                src={p.image}
                alt={p.name}
                className="max-h-40 w-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="mt-3 font-semibold text-gray-800 text-lg line-clamp-1">{p.name}</h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{p.desc}</p>

            <div className="mt-3 flex justify-between items-center">
              <span className="text-brand font-bold text-lg">{p.price}</span>
              <Link
                to={`/products/${p.id}`}
                className="text-sm bg-brand hover:bg-brand-dark text-white px-3 py-1.5 rounded transition"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {!previewOnly && items.length === 0 && (
        <p className="mt-4 text-gray-500 text-center">No products found.</p>
      )}
    </section>
  );
}
