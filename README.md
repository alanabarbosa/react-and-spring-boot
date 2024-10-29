# Fullstack Project: Spring Boot + Docker & React (Vite)

## 📝 Sobre o Projeto

Este projeto é uma aplicação fullstack composta por um backend em **Spring Boot** e um frontend em **React** utilizando **Vite**. O backend é containerizado com **Docker** e fornece uma API para o frontend, que consome e exibe os dados.

## 🛠 Tecnologias Utilizadas

- **Backend**:
  - Spring Boot
  - Maven
  - Docker
- **Frontend**:
  - React (Vite)
  - JavaScript
  - CSS
- **Outras Ferramentas**:
  - Docker Compose


## ⚙️ Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas:

- [Git](https://git-scm.com)
- [Docker](https://www.docker.com)
- [Node.js](https://nodejs.org) e [npm](https://www.npmjs.com)

## 🚀 Instalação e Configuração

### Backend 🐳

1. Navegue até a pasta do backend:

   ```bash
   cd backend

2. Compile o projeto com Maven:

   ```bash
   ./mvnw clean install

3. Executar o docker composer:

   ```bash
   docker compose up -d --build

4. Acesse a aplicação:

   ```bash
   http://localhost:8080/swagger-ui/index.html   

### Frontend

1. Navegue até a pasta do frontend:

   ```bash
   cd frontend

2. Instale as dependências do projeto:

   ```bash
   npm install

4. Construa o frontend:

   ```bash
   yarn dev

3. Acesse a aplicação

   ```bash
   http://localhost:5173/


