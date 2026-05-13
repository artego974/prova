# Senac Wedding
Projeto para organização de eventos sendo totalmente funcional e um sistema completo para gerencia.

Baixe o projeto e rode 
``````bash
cd backend
npm i 
cd ..
cd frontend 
npm i 
``````
Apos instalar todas as dependencias 

``````bash
npm run dev // <-- tanto na pasta backend e na frontend simutaneamente em 2 terminais

``````

## Backend
As rotas do backend cosistem em list, create update, update,delete, dashboard e checkin

List --> lista todos os guests ou por nome 

Create --> cria usuarios

Update --> muda dados dos usuarios

Delete --> deleta usuarios

Dashboard --> lista o total dos guests, os que fizeram checkin, os pendentes e a porcentagem de ocupação

Checkin --> altera o estado de checkin false para true e impedindo o usuario realizar 2 vezes