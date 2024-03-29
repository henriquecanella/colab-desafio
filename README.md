# Colab Desafio (Sistema de Listagem de Usuários)
Repositório referente ao desafio do processo seletivo da Colab sendo um projeto de aplicação web desenvolvido com React para o frontend e NestJS para o backend

## Desafio
criar uma aplicação web que consuma a API [Random User Generator](https://randomuser.me/) para exibir uma lista de usuários e os detalhes de cada usuário.

## Requisitos
- A aplicação deve ser escrita em TypeScript.
- O frontend deve ser desenvolvido usando React.
- O back-end deve estar separado, porém no mesmo repo, pode ser utilizado qualquer framework node.js
- O backend deve consumir a API Random User Generator para obter os dados dos usuários e não o front diretamente.
- Deve haver uma página de listagem de usuários que exiba pelo menos o nome de cada usuário.
- Ao clicar em um usuário da lista, deve ser exibida uma página de detalhes que mostra informações mais detalhadas sobre o usuário selecionado.
- A interface do usuário deve ser atraente e amigável, utilize qualquer framework de UI ou DS que você conheça.
- Os commits no repositório Git devem ser organizados e significativos.
- O README.md deve explicar as decisões de arquitetura, paradigmas e outras escolhas importantes feitas durante o desenvolvimento da aplicação.

## Design do Sistema
- **frontend**: Contém o código do frontend em React, incluindo componentes, páginas e serviços para interagir com o backend e exibir os dados dos usuários.
- **backend**: Contém o código do backend em NestJS, incluindo todo o necessário para fornecer uma API que busca dados de usuários da API Random User Generator.

<img alt="System design diagram" title="System design diagram" src=".github/assets/System-design.png" />

## Decisão de Arquitetura

### Backend
- **Clean Architecture**: A aplicação é estruturada de acordo com os princípios da Clean Architecture, mantendo uma separação clara entre as camadas.
- **Domain-Driven Design (DDD)**: O código é organizado em torno das regras de negócio do domínio, garantindo que a estrutura da aplicação reflita o domínio do problema.

A escolha da Clean Architecture com princípios de Domain-Driven Design (DDD) foi feita devido à sua capacidade de promover uma separação clara de responsabilidades, independência de frameworks, foco nas regras de negócio do domínio e testabilidade do código. Em comparação com a arquitetura MVC por exemplo, a Clean Architecture oferece uma organização mais clara do código, facilitando o desenvolvimento, teste e manutenção da aplicação. Além disso, é mais flexível e adaptável a mudanças nos requisitos de negócio e tecnologias, tornando-a uma escolha sólida para projetos de longo prazo.

### Frontend
Dado a simplicidade da aplicação frontend, onde a grande maioria das regras de negócio e lógica estarem presentes no backend, foi optado por uma arquitetura mais simples, contendo Paginas e Componentes, além do servico para API. E mesmo que a aplicação venha a escalar dado o contexto e natureza da mesma, isso não seria um problema. E caso seja necessário adição de novas funcionalidades com regras de negócio mais elaborados, por conta das features atuais serem de complexidade mais baixa, não seria um grande retrabalho adicionar novas camadas para arquitetura

## Requisitos de Sistema Para Execução da Aplicação Localmente
- **Node.js**: v21.6.1
- **Npm**: 10.2.4

## Iniciando a Aplicação Localmente
Para iniciar o backend da aplicação utilize os seguintes comandos:
```
cd backend
npm install
npm run start
```
Para visualizar acesse no navegador: `localhost:3000`

Já para iniciar o frontend da aplicação utilize os comandos:
```
cd frontend
npm install
npm run dev
```
Para visualizar acesse no navegador: `localhost:5173`

### Rodando os Testes
Para rodar os testes de unidade do backend utilize os seguintes comandos:
```
cd backend
npm test
```

## Iniciando a Aplicação com Docker
Para executar a stack, precisa do docker instalado na máquina. O Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

### Instalação do Docker
Considerando que você usa uma distribuição Linux baseada em Debian, execute:
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
dpkg --print-architecture
echo  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" |   sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt update -y
apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

### Instalação do Docker Compose
O docker-compose é uma ferramenta que agilizaa o deploy de ambientes, utilizando uma forma simples, claro e padronizada. É uma forma de definir infraestrutura docker em um só arquivo, considerando rede, volumes, etc.
```
sudo curl -L "https://github.com/docker/compose/releases/download/v2.23.0/docker-compose-linux-x86_64" -o /usr/local/bin/docker-compose
```

### Executando a aplicação
Para subir a aplicação dado o Docker e Docker Compose instalados rode o seguinte comando:
```
docker-compose up
```
Para encerrar a aplicação rode o comando:
```
docker-compose down
```

