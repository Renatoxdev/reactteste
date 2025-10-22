import React, { useState } from 'react';
import './Home.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="home-container">
      <h2>Sobre nós:</h2>
      <p>
        Aqui na Nebula Criativa, unimos estratégia, design e tecnologia para transformar marcas em experiências digitais que as pessoas realmente querem usar. Acreditamos que um bom site não é só bonito: ele comunica claro, carrega rápido, é acessível e converte. Por isso, cada projeto começa entendendo o seu negócio, seus objetivos e o que move seu público.
      </p>
      <p>
        Nosso processo é simples e transparente: mapeamos oportunidades, desenhamos a jornada, prototipamos, validamos e só então desenvolvemos com código limpo e SEO técnico. Trabalhamos com identidade visual, sites institucionais, landing pages, e-commerce e otimização de performance — sempre com foco em acessibilidade e métricas que importam (velocidade, indexação e conversão).
      </p>
      <p>
        Mais do que entregar um site, buscamos construir parceria. Medimos resultados, iteramos com você e mantemos tudo atualizado para que sua presença digital evolua junto do seu negócio. Se você procura uma equipe criativa, ágil e obcecada por detalhes, a Nebula Criativa é o seu próximo passo. Vamos decolar?
      </p>
    </main>
  );
}
