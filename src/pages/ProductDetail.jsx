import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetail(){
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

  if(!product) return <div className="p-8">Loading...</div>;

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <Link to="/products" className="text-brand underline">← Back to products</Link>
      <div className="mt-4 bg-white p-6 rounded shadow">
        <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded mb-4" />
        <h1 className="text-2xl font-semibold text-gray-800">{product.name}</h1>
        <p className="mt-2 text-gray-600">{product.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-brand font-bold text-xl">{product.price}</div>
          <button className="bg-brand text-white px-4 py-2 rounded">Enquire</button>
        </div>
      </div>
    </div>
  );
}
