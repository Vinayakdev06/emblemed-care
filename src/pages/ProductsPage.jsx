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
  const display = previewOnly ? items.slice(0,4) : items;
  return (
    <section id="products" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Products</h2>
        {!previewOnly && <Link to="/products" className="text-brand underline">View all</Link>}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {display.map(p => (
          <div key={p.id} className="bg-white p-4 rounded shadow">
            <img src={p.image} alt={p.name} className="h-48 w-full object-cover rounded mb-3" />
            <h3 className="font-medium text-gray-800">{p.name}</h3>
            <p className="text-sm text-gray-600">{p.desc}</p>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-brand font-semibold">{p.price}</span>
              <Link to={`/products/${p.id}`} className="text-sm text-white bg-brand px-3 py-1 rounded">Details</Link>
            </div>
          </div>
        ))}
      </div>
      {!previewOnly && items.length===0 && <p className="mt-4 text-gray-500">No products found.</p>}
    </section>
  );
}
