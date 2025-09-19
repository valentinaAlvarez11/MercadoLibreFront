"use client";
import React, { useEffect, useState } from "react";

interface Product {
	id: number;
	name: string;
	price: string;
	rating: number;
	description: string[];
	imageUrl: string;
}

export default function ProductPage() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch("http://localhost:3000/product")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.productos);
				setLoading(false);
			})
			.catch(() => {
				setError("Error al cargar productos");
				setLoading(false);
			});
	}, []);

	if (loading) return <div className="p-8 text-center">Cargando productos...</div>;
	if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

	return (
		<div className="max-w-5xl mx-auto p-4">
			<h1 className="text-2xl font-bold mb-6">Productos</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{products.map((product) => (
					<div key={product.id} className="border rounded-lg shadow-sm p-4 bg-white">
						<img src={product.imageUrl} alt={product.name} className="w-full h-40 object-contain mb-2" />
						<h2 className="text-lg font-semibold mb-1">{product.name}</h2>
						<p className="text-yellow-700 font-bold mb-1">${product.price}</p>
						<p className="text-gray-600 mb-1">Rating: {product.rating}</p>
						<ul className="text-sm text-gray-700 mb-2 list-disc pl-5">
							{product.description.map((desc, idx) => (
								<li key={idx}>{desc}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}