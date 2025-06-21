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

---

# Projeto de Classificação de Diabetes

**Este arquivo foca na parte de Processamento e Tratamento de Dados, bem como no Treinamento de Modelos de Machine Learning para classificação de diabetes.**

## Visão Geral da Contribuição (Processamento e Modelagem)

Minha contribuição para o projeto abrange as seguintes etapas principais:

1.  **Carregamento e Preparação dos Dados**: Importação do conjunto de dados de diabetes no formato ARFF.
2.  **Análise Exploratória de Dados (EDA)**: Compreensão da estrutura dos dados, identificação de distribuições, correlações e valores ausentes.
3.  **Pré-processamento de Dados**: Tratamento de valores ausentes (se houver), padronização/normalização das features, e outras transformações necessárias para preparar os dados para os modelos.
4.  **Seleção e Avaliação de Modelos**: Aplicação de diversos algoritmos de classificação (Regressão Logística, LDA, KNN, Árvore de Decisão, Naive Bayes, SVM, Random Forest, MLP) para encontrar o modelo com melhor desempenho para o problema.
5.  **Treinamento e Persistência do Modelo**: Treinamento do modelo com melhor desempenho identificado (Linear Discriminant Analysis - LDA) e salvamento em formato `joblib` para uso futuro em outras etapas do projeto, como a interface ou deploy.

## Estrutura do Repositório

* `TREINAMENTO_E_PROCESSAMENTO CONCLUIDO.ipynb`: O notebook Jupyter (Google Colab) contendo todo o código-fonte referente ao processamento de dados, análise exploratória, treinamento e avaliação de modelos.
* `Datasets/diabetes.arff`: (Assumindo que este seja o caminho para o seu dataset. Se o dataset não for público ou estiver em outro local, ajuste esta descrição). O conjunto de dados original utilizado para o desenvolvimento.
* `Datasets/modelo_melhor.joblib`: O modelo de Machine Learning treinado (Linear Discriminant Analysis - LDA), salvo em formato `joblib` para ser reutilizado.

## Tecnologias Utilizadas

* **Python 3**
* **Bibliotecas:**
    * `pandas`: Manipulação e análise de dados.
    * `numpy`: Operações numéricas.
    * `matplotlib`: Geração de gráficos.
    * `seaborn`: Visualização de dados estatísticos.
    * `scipy.io.arff`: Leitura de arquivos ARFF.
    * `scikit-learn`: Ferramentas para machine learning (pré-processamento, seleção de modelos, métricas).
    * `joblib`: Serialização e desserialização de objetos Python (para salvar o modelo).

## Como Executar o Processamento de Dados e o Treinamento do Modelo

Para replicar e executar **apenas a parte de processamento de dados e treinamento de modelos** deste projeto, siga os passos abaixo:

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/FatecFranca/DSM-P5-G05-2025-1]
    ```
2.  **Abra o Notebook no Google Colab:**
    * Faça upload do arquivo `TREINAMENTO_E_PROCESSAMENTO CONCLUIDO.ipynb` para o Google Colab ou abra-o diretamente no Colab se você clonou o repositório para o seu Google Drive.

3.  **Monte o Google Drive (no Colab):**
    * No notebook, execute a primeira célula que contém o código para montar seu Google Drive. Isso é crucial para que o notebook possa acessar o arquivo `diabetes.arff` e salvar o modelo treinado (`modelo_melhor.joblib`). Certifique-se de que o arquivo `diabetes.arff` esteja no caminho `/content/drive/My Drive/Datasets/` no seu Drive ou ajuste o caminho no código do notebook conforme necessário.

4.  **Execute as Células Sequencialmente:**
    * Execute todas as células do notebook na ordem. Isso irá carregar os dados, realizar todas as etapas de pré-processamento e análise exploratória, treinar e avaliar os diversos modelos de classificação, e, por fim, salvar o modelo `lda` treinado para uso posterior.

## Resultados e Conclusões da Parte de Modelagem

O processamento cuidadoso dos dados foi fundamental para o sucesso na construção dos modelos. Diversos algoritmos de Machine Learning foram avaliados, e o `Linear Discriminant Analysis (LDA)` se destacou, apresentando uma alta acurácia na classificação de casos de diabetes. Este modelo treinado está pronto para ser integrado a outras partes do projeto, como uma interface de usuário ou uma API.

## Autor

Leovpf [(https://github.com/Leovpf)]

# Front

## Descrição

Este repositório contém o código-fonte do front-end desenvolvido para o PI do 5º semestre do curso de Desenvolvimento de Software Multiplataforma (DSM). O objetivo é implementar a interface do usuário conforme as diretrizes do projeto.

## Tecnologias Utilizadas

- C# .net maui

## Protótipo

O(A) protótipo/documentação da aplicação pode ser visualizado no
[Figma](https://www.figma.com/design/tiDSjI9lqf5WrJcjj1hlJ5/PI5?node-id=0-1&p=f&t=KqnyfG5y4qVUqcj5-0)
![image](https://github.com/user-attachments/assets/20c1040a-de09-402e-b9ac-545938a4f0ea)

## Como Executar

1. Clone o repositório:
   ```sh
   git clone https://github.com/Kaue404/PI5.git

2. Acesse o diretório do projeto:
   ```sh
   cd PI5

3. Rode o código no Visual Studio com um emulador android
