
angular.module('MainController', [])

    .controller('MainController', function ($scope, $http) {
        //   $http.get('https://raw.githubusercontent.com/furflez/rpg-characters/master/database/db.json').success(function (data) {
        // $http.get('../database/db.json').success(function (data) {
            // $scope.data = data;
            $scope.data = database;
        // });
    });

var database = {
    "chars": [
        {
            "id": "1",
            "name": "Yumi Yoshimoto",
            "quote": "Tóquio precisa de uma detetive competente, para o sobrenatural.",
            "history": "Ser detetive não é fácil, ainda mais quando se precisa lidar com o sobrenatural... Era uma quinta feira chuvosa xx de xxxxxxxx de xxxx, tinha acabado de fazer as compras no mercado para preparar uma janta especial, afinal eram 5 anos de casamento que se completariam, nunca esquecerei essa data. Eu tinha finalizado meu horário de trabalho, estava a caminho de casa, planejando o que fazer, meu marido chegaria em algumas horas, eu tinha tempo, ou teria. xxxx chefe da polícia me telefona, precisavam que eu ajudasse em um caso urgente, um policial e seu parceiro haviam sido assassinados em perseguição. É meu trabalho, eu não queria estragar a data, mas eu precisava ajudar... Era algo trágico, e eu precisava analisar o caso e o local, talvez não demorasse tanto assim e eu poderia voltar a minha rotina normal... O local era estranho demais para estes assassinatos, um prédio muito antigo com um interior diferente como se fosse um templo de alguma seita, fui informada que estes polícias perseguiam um suspeito que fugiu após uma denúncia de assédio sexual... Este prédio estava fechado a muito tempo, foi cenário de um outro crime que foi arquivado por não ter uma solução, mas duvidava muito que os casos estejam interligados, bom, faziam 40 anos! Este lugar me dava arrepios, os corpos no chão estavam com os olhos abertos, fixos em uma direção. Um assassinato muito estranho para os que eu costumava investigar, não haviam sinais de luta e também não tinham sinais de mais pessoas... Não acreditava em fantasmas e coisas sobrenaturais até esse dia, podia afetar minha profissão. Decidi coletar provas, e procurar evidências, mas os olhos dos cadáveres fixos em uma direção começaram a me deixar intrigada, em meio aos flashs das câmeras que registravam a cena, algo muito estranho aconteceu, o tempo parecia ter brevemente congelado e um vulto naquela direção parecia me convidar a ver algo a mais, encenando que estava procurando por mais provas fui em direção a este vulto por um corredor e logo desapareceu em frente uma lareira de tijolos. Algo forte chamava pelo meu nome em uma língua estranha mas que eu estava conseguindo compreender. Um padrão incomum nos tijolos me chamou a atenção, algo estava escondido lá. Removendo u tijolo encontro uma caixa, fechada com símbolos que não eram japonês, foi somente abrir essa caixa que um anel prateado com uma pedra roxa quase negra voou em direção ao meu dedo, e foi aí que minha vida mudou... Tudo ao meu redor era tão simples mas ao mesmo tempo complexo, uma pessoa começou a falar comigo, era como se fosse eu mesmo em outra vida... Em uma língua chamada enoquiano ela falava, temos um destino a cumprir...",
            "image": "https://lh6.googleusercontent.com/AAeE5siMPGiLNKVhU4Rew5YV3pVWli-XdkOvV57U7l0ubfuIWe6Z2MfEmQO7irzEZOAt466l26A4woQ=w1366-h613",
            "description": "Hermética Detetive da polícia de tóquio a alguns anos desde que foi transferida de XXXXXXX para auxiliar em casos maiores, possui cabelos longos negros contrastando com sua pele levemente pálida e olhos escuros cansados devido as revelações após o despertar em sua vida. Suas roupas em tons de preto e cinza a deixam muito bem vestida. Compreende que possui um destino tornando a comprometida a superar qualquer desafio da forma que puder, tentando ao máximo salvar quem for necessário. Seu vicio em cigarro não é um orgulho, serve como uma breve fuga de todo o seu passado traumático. Em seus dedos um calo de aliança de casamento e um peculiar anel prateado com uma pedra de coloração roxa muito escura.",
            "player": {
                "name": "Furflez (Felipe Amaral)",
                "date": "11/01/2017",
                "rpg": "Mago: A ascenção",
                "type": "Tradição: Ordem de Hermes (Ex Miscelânea)"
            },
            "references": [{
                "title":"Música: The Response - Cinema sleep",
                "type":"1",
                "source": "c6vwXSfYMa8"
            }],
            "diary": {}
        },
        {
            "id": "2",
            "name": "Dr. Gus Hodgins"
        },
        {
            "id": "3",
            "name": "Amalya Kilgore"
        },
        {
            "id": "4",
            "name": "Masakasu Shoji"
        }
    ]
}
