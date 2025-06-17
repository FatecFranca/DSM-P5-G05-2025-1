# DSM-P5-G05-2025-1
Repositório do GRUPO 05 do Projeto Interdisciplinar do 5º semestre DSM 2025/1.

#### Alunos: 
<ul>
  <li>CLÁUDIO MATOS</li>
  <li>JOAO PEDRO ANDRADE CINTRA</li>
  <li>KAUE JOSE ABDALLA LEAL</li>
  <li>LEONARDO VICTOR PEREIRA FERREIRA</li>
</ul>

---

## Estrutura/Especificações:
- Máquina Virtual/Servidor: Ubuntu LTS 22.04 on Microsoft Azure Cloud 
- Banco de Dados: MySQL 
- Conexão MySQL: IP 13.68.75.61:3306

---

## Como rodar o back-end (Node.js)

1. **Acesse a pasta do back-end:**
   ```sh
   cd back
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` na pasta `back` com as informações do banco de dados:
     ```
     DB_NAME=nome_do_banco
     DB_USER=usuario
     DB_PASSWORD=senha
     DB_HOST=13.68.75.61
     PORT=3000
     ```
   - Altere os valores conforme necessário.

4. **Inicie o servidor:**
   ```sh
   node server.js
   ```
   O servidor estará disponível em `http://localhost:3000` (ou na porta definida).

---

## Observações

- Certifique-se de que o MySQL está rodando e acessível.
- O projeto utiliza Sequelize para ORM.
- Para dúvidas sobre o back-end, consulte o [README do back](back/README.md).
