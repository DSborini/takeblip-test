# Repositório da Lora (bot)

## Desenvolvimento

Foi desenvolvido um Contato Inteligente através da plataforma do portal Blip, responsável por apresentar ao usuário valores da empresa e desafios. Para realizar o retorno dos repositórios, foi criada uma API própria responsável por realizar requisições à API pública do GitHub e tratar os dados recebidos.

## Para testar o BOT:

- [Acesse o portal Blip](https://help.blip.ai/hc/pt-br/articles/360059353133-Como-importar-o-fluxo-de-um-bot-no-Builder), e carregue o arquivo .json:
 ``` /Flow/lora39.json ```

## Para testar a API:

### Online:

- Acesse a API em funcionamento através do Heroku:
 ``` https://ds-takeblip.herokuapp.com/ ```
 
### Localmente:

- Clone o repositório:
 ``` git clone git@github.com:DSborini/takeblip-test.git ```
- Acesse o diretório e instale as dependências:
 ``` npm install ```
- Execute a API:
 ``` npm run dev ```
- O endereço padrão será:
 ``` http://localhost:3000/ ```

### Uso:

#### 1 - Endpoint para o retorno de reposítórios

Unico edpoint da aplicação, responsável por retornar dados de repositórios publicos do GitHub, variando de acordo com as opções passadas pelo usuário na rota: ``` /repos/{org}/{sort}/{dir}/{qnt}/{lang} ```, são elas:

- ``` org ``` : nome da organização que contém os repositórios;
- ``` sort ``` : opção de ordenação dos repositórios, podendo ser "created", "updated", "pushed", "full_name";
- ``` dir ``` : opção de ordenação dos repositórios, podendo ser "asc" (crescente) ou "desc" (decrescente);
- ``` qnt ``` : quantidade desejada de repositórios para serem verificados (isso não garante a mesma quantidade no retorno final);
- ``` lang ``` : linguagem do repositório desejada, como "JavaScript" ou "C#" por exemplo (atenção à caracteres especiais);

Por exemplo, caso eu deseje verificar 20 repositórios da Take Blip, e retornar apenas os feitos em C#, pela data de criação de maneira crescente, o endpoint seria: ``` /repos/takenet/create/asc/20/C%23 ```.
Os dados serão tratados e retornados em objetos, com as informações essenciais (aquelas utilizadas pelo bot), semelhante à seguinte forma:

  ```json
  {
  "0": {
    "name": "library.data",
    "description": "Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications",
    "language": "C#",
    "avatar_url": "https://avatars.githubusercontent.com/u/4369522?v=4"
  },
  "1": {
    "name": "library.logging",
    "description": "Provides a simple logging interface for applications and some basic implementations of this interface",
    "language": "C#",
    "avatar_url": "https://avatars.githubusercontent.com/u/4369522?v=4"
  },
  "2": {
    "name": "libphonenumber-csharp",
    "description": "Forking original c# port",
    "language": "C#",
    "avatar_url": "https://avatars.githubusercontent.com/u/4369522?v=4"
  },
  "3": {
    "name": "Takenet.Radar",
    "description": "Radar de tecnologias takenet",
    "language": "C#",
    "avatar_url": "https://avatars.githubusercontent.com/u/4369522?v=4"
  },
  "4": {
    "name": "Takenet.ScoreSystem",
    "description": "Takenet score system",
    "language": "C#",
    "avatar_url": "https://avatars.githubusercontent.com/u/4369522?v=4"
  },
  "5": {
    "name": "ServiceStack.Text",
    "description": ".NET's fastest JSON, JSV and CSV Text Serializers ",
    "language": "C#",
    "avatar_url": "https://avatars.githubusercontent.com/u/4369522?v=4"
  },
  "6": {
    "name": "lime-csharp",
    "description": "C# LIME protocol implementation",
    "language": "C#",
    "avatar_url": "https://avatars.githubusercontent.com/u/4369522?v=4"
  },
  "7": {
    "name": "Org.Lucasr.TwoWayView-Xamarin-Binding",
    "description": "Xamarin Binding for twoway-view library",
    "language": "C#",
    "avatar_url": "https://avatars.githubusercontent.com/u/4369522?v=4"
  },
  "8": {
    "name": "elephant",
    "description": "Persistence library that provides common data structures as composable elements to abstract any storage engine, including (No)SQL databases.",
    "language": "C#",
    "avatar_url": "https://avatars.githubusercontent.com/u/4369522?v=4"
  }
}
  ```
Caso a requisição à API do GitHub falhe, ou nenhum repositório com as especificações for encontrado, um erro será retornado.


