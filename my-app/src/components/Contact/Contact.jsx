import React, { useState, useEffect } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  //Hook useEffect
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      console.log('Formulário enviado com sucesso!', formData);
      alert('Mensagem enviada com sucesso!');
      const timer = setTimeout(() => {
        setFormData({ nome: '', email: '', mensagem: '' });
        setIsSubmitted(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, formData]);


  useEffect(() => {
    console.log('Componente Contact montado!');
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <section className="contact-section">
      <h2>Entre em Contato</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome"
          />
        </label>

        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
          />
        </label>

        <label>
          Mensagem:
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Digite sua mensagem..."
          />
        </label>

        <button type="submit" disabled={isSubmitted}>
          {isSubmitted ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </section>
  );
}
