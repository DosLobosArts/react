import React, { useState } from 'react';

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    c_postal: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Aquí puedes enviar los datos al servidor
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        placeholder="soy gay"
        value={formData.nombre}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="codigo postal">Codigo postal:</label>
      <input
        id="c_postal"
        name="c_postal"
        value={formData.c_postal}
        onChange={handleChange}
      />

      <button type="submit">Hacer pedido</button>
    </form>
  );
}
