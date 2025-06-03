"use client"

import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import axios from 'axios';

export default function Projetos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/jansenokasaki/repos')
      .then(response => setRepos(response.data.slice(0, 5)))
      .catch(error => console.error('Erro ao buscar repositórios do GitHub:', error));
  }, []);

  return (
    <div>
      <NavBar />
      <section className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Projetos Desenvolvidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map(repo => (
              <div key={repo.id} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold">{repo.name}</h3>
                <p className="text-gray-600">{repo.description || 'Sem descrição'}</p>
                <a href={repo.html_url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  Ver no GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}