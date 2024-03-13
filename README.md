### O boilerplate foi criado com objetivo de fornecer uma estrutura básica para criação de projetos React+TypeScript+Vite com suporte as bibliotecas de testes `Jest` e `React Testing Library`. Além disso, o mesmo já vem com `relative paths` e o `prettier` configurados.
---

### Clonando
O comando abaixo permite obter apenas conteúdo do repositório. Ou seja, nada relacionado ao versionamento(branchs, histórico de commits e referência ao repositório remoto) será baixado.

`npx degit https://github.com/thalya-codes/boilerplate-react-vite-jest-rtl#main`


[Mais informações sobre o `degit`](https://medium.com/@vuelancer/replacement-for-git-clone-degit-64b88dcfff4e)

---
###  Comandos
`npm i` : Instala os pacotes

`npm run dev` : Roda o projeto

`npm run test` : Roda os testes

### Customização
 #### Adicionando novos alias
 Para modificar ou adicionar outros caminhos relativos, basta seguir o passo a passo abaixo.

  1) No arquivo `vite.config.ts`, em `alias`, adicione um conjunto de chave e valor. Onde a chave será o nome do atalho para aquela pasta e o valor o caminho relativo para a mesma. 
  
      ```js
        export default defineConfig({
            resolve: {
              alias: {
              '@': path.resolve('src'),
              '@assets': path.resolve('src/assets') 
              },
            },
            plugins: [react()],
          });

      ```

      O exemplo acima demonstra um cenário onde temos uma pasta `assets` dentro da pasta `src`.


2) No arquivo `tsconfig.node.json`, em `paths`, adicione um novo conjunto de chave e valor, seguindo a seguinte sintaxe:
 
    `"atalho/*": ["caminho-relativo/*"]`

    ```js
      "paths": {
        "@assets/": ["src/assets/*"]
      }
    ```