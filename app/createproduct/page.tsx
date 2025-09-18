"use client";
"use client";
import React, { useState } from "react";
import InputComponents from "@/components/atoms/InputComponents";

const initialState = {
  name: "",
  price: "",
  rating: 0,
  description: [""],
  imageUrl: ""
};

export default function CreateProductPage() {
  const [form, setForm] = useState(initialState);
  const [descInputs, setDescInputs] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDescChange = (idx: number, value: string) => {
    const newDescs = [...descInputs];
    newDescs[idx] = value;
    setDescInputs(newDescs);
  };

  const addDescField = () => {
    setDescInputs([...descInputs, ""]);
  };

  const removeDescField = (idx: number) => {
    if (descInputs.length === 1) return;
    setDescInputs(descInputs.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const payload = {
      ...form,
      rating: Number(form.rating),
      description: descInputs.filter(d => d.trim() !== "")
    };
    try {
      const res = await fetch("http://localhost:3000/createproduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Producto creado exitosamente");
        setForm(initialState);
        setDescInputs([""]);
      } else {
        setMessage(data.error || "Error al crear producto");
      }
    } catch (err) {
      setMessage("Error de conexión con el backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="ml-container">
      <h1 className="ml-title">Crear Producto</h1>
      <form onSubmit={handleSubmit} className="ml-form">
        <label className="ml-label">Nombre</label>
        <input name="name" value={form.name} onChange={handleChange} required className="ml-input" />

        <label className="ml-label">Precio</label>
        <input name="price" value={form.price} onChange={handleChange} required className="ml-input" />

        <label className="ml-label">Rating</label>
        <input name="rating" type="number" step="0.1" min="0" max="5" value={form.rating} onChange={handleChange} required className="ml-input" />

        <label className="ml-label">Descripción</label>
        {descInputs.map((desc, idx) => (
          <div key={idx} className="ml-desc-row">
            <input
              value={desc}
              onChange={e => handleDescChange(idx, e.target.value)}
              required
              className="ml-input flex-1"
              placeholder={`Descripción ${idx + 1}`}
            />
            {descInputs.length > 1 && (
              <button type="button" onClick={() => removeDescField(idx)} className="ml-desc-btn ml-desc-btn-remove" title="Quitar">-</button>
            )}
            {idx === descInputs.length - 1 && (
              <button type="button" onClick={addDescField} className="ml-desc-btn ml-desc-btn-add" title="Agregar">+</button>
            )}
          </div>
        ))}

        <label className="ml-label">Imagen (URL)</label>
        <input name="imageUrl" value={form.imageUrl} onChange={handleChange} required className="ml-input" />

        <button type="submit" disabled={loading} className="ml-btn">
          {loading ? "Creando..." : "Crear Producto"}
        </button>
      </form>
      {message && <div className={`ml-message ${message.includes("exitosamente") ? "ml-message-success" : "ml-message-error"}`}>{message}</div>}
    </main>
  );
}
