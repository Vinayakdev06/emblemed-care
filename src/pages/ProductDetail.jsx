import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        const found = (data.products || []).find(p => String(p.id) === String(id));
        setProduct(found || null);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div className="p-8 text-center text-gray-600">Loading...</div>;

  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <Link
        to="/products"
        className="inline-block mb-4 text-brand hover:text-brand-dark underline"
      >
        ← Back to Products
      </Link>

      <div className="bg-white rounded-xl shadow-lg p-6 md:flex gap-6">
        <div className="md:w-1/2 bg-gray-50 p-4 rounded-lg flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-96 w-full object-contain rounded transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
          <p className="mt-3 text-gray-600 leading-relaxed">{product.desc}</p>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-2xl font-bold text-brand">{product.price}</div>
            <button className="bg-brand hover:bg-brand-dark text-white px-6 py-2 rounded transition">
              Enquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
