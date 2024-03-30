# CustomerSuccess Balancing

## Descrição
Este projeto implementa um sistema de balanceamento entre clientes e Customer Success (CSs). Os CSs são responsáveis pelo acompanhamento estratégico dos clientes, e dependendo do tamanho do cliente, CSs mais experientes são designados para atendê-los. Este sistema garante que os clientes sejam distribuídos entre os CSs de forma eficiente, levando em consideração o nível de experiência dos CSs e a disponibilidade deles.

## Como Usar

### Pré-requisitos
- Node.js instalado na sua máquina.

### Executando o Aplicativo
1. Clone o repositório para sua máquina local usando `git clone https://github.com/pedrosouza423/DesafioCustomerSuccessBalancing.git`.
2. Navegue até a pasta do projeto via terminal.
3. Execute o comando `node app.js` para iniciar a aplicação.

A aplicação distribuirá os clientes entre os CSs disponíveis baseado nos níveis de experiência dos CSs e no tamanho dos clientes. O resultado será exibido no console.

### Personalizando os Testes
Para realizar testes personalizados da aplicação, modifique as listas `csList`, `clientsList`, e `unavailableCsIds` no arquivo `app.js`. Essas listas representam, respectivamente, os Customer Success disponíveis, os clientes e os IDs dos Customer Success que estão indisponíveis. Após realizar as modificações, execute `node app.js` para ver o resultado da distribuição com base nas suas alterações.

## Como Testar

### Executando Testes
Este projeto utiliza Jest para testes automatizados. Para rodar os testes, siga os passos abaixo:

1. Certifique-se de que todas as dependências estão instaladas executando `npm install` na pasta do projeto.
2. Execute os testes utilizando o comando `npm run test`.

Os testes cobrem vários cenários, incluindo a distribuição adequada dos clientes, tratamento de CSs indisponíveis, e validações das premissas do desafio como limites de IDs e níveis de CSs e clientes.

## Estrutura do Projeto
- `app.js`: Arquivo principal que executa o sistema de balanceamento.
- `Cliente.js`: Define a classe Cliente, usada para criar objetos de cliente com ID e tamanho.
- `CustomerSuccess.js`: Define a classe CustomerSuccess, usada para criar objetos de CS com ID, nível de experiência e clientes atribuídos.
- `customerSuccessBalancing.js`: Contém a lógica de balanceamento entre CSs e clientes.
- `validarLimitesEUnicidade.js`: Função auxiliar para validar os limites e a unicidade dos IDs e níveis.
- `customerSuccessBalancing.test.js`: Contém os testes automatizados para o sistema de balanceamento.

## Contribuindo
Sinta-se à vontade para contribuir com melhorias no código ou nos testes. Para contribuir, faça um fork do projeto, crie uma branch para sua feature ou correção, e abra um Pull Request.
