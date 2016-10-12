/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */

angular
    .module('inspinia')
    .controller('MainCtrl', ["$scope", "$anchorScroll", "$location", function($scope, $anchorScroll, $location) {

        $scope.itemsAdded = [];
        var test = {
            1: [{
                "userId": 10,
                "id": 97,
                "title": "quas fugiat ut perspiciatis vero provident",
                "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
            }, {
                "userId": 10,
                "id": 98,
                "title": "laboriosam dolor voluptates",
                "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
            }, {
                "userId": 10,
                "id": 99,
                "title": "temporibus sit alias delectus eligendi possimus magni",
                "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
            }, {
                "userId": 10,
                "id": 100,
                "title": "at nam consequatur ea labore ea harum",
                "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
            }, {
                "userId": 10,
                "id": 97,
                "title": "quas fugiat ut perspiciatis vero provident",
                "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
            }, {
                "userId": 10,
                "id": 98,
                "title": "laboriosam dolor voluptates",
                "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
            }, {
                "userId": 10,
                "id": 99,
                "title": "temporibus sit alias delectus eligendi possimus magni",
                "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
            }, {
                "userId": 10,
                "id": 100,
                "title": "at nam consequatur ea labore ea harum",
                "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
            }, {
                "userId": 10,
                "id": 97,
                "title": "quas fugiat ut perspiciatis vero provident",
                "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
            }, {
                "userId": 10,
                "id": 98,
                "title": "laboriosam dolor voluptates",
                "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
            }, {
                "userId": 10,
                "id": 99,
                "title": "temporibus sit alias delectus eligendi possimus magni",
                "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
            }, {
                "userId": 10,
                "id": 100,
                "title": "at nam consequatur ea labore ea harum",
                "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
            }, {
                "userId": 10,
                "id": 97,
                "title": "quas fugiat ut perspiciatis vero provident",
                "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
            }, {
                "userId": 10,
                "id": 98,
                "title": "laboriosam dolor voluptates",
                "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
            }, {
                "userId": 10,
                "id": 99,
                "title": "temporibus sit alias delectus eligendi possimus magni",
                "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
            }, {
                "userId": 10,
                "id": 100,
                "title": "at nam consequatur ea labore ea harum",
                "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
            }, {
                "userId": 10,
                "id": 97,
                "title": "quas fugiat ut perspiciatis vero provident",
                "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
            }, {
                "userId": 10,
                "id": 98,
                "title": "laboriosam dolor voluptates",
                "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
            }, {
                "userId": 10,
                "id": 99,
                "title": "temporibus sit alias delectus eligendi possimus magni",
                "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
            }, {
                "userId": 10,
                "id": 100,
                "title": "at nam consequatur ea labore ea harum",
                "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
            }],
            2: [{
                "userId": 10,
                "id": 91,
                "title": "aut amet sed",
                "body": "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat"
            }, {
                "userId": 10,
                "id": 92,
                "title": "ratione ex tenetur perferendis",
                "body": "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui"
            }, {
                "userId": 10,
                "id": 93,
                "title": "beatae soluta recusandae",
                "body": "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla"
            }],
            3: [{
                "userId": 10,
                "id": 94,
                "title": "qui qui voluptates illo iste minima",
                "body": "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
            }, {
                "userId": 10,
                "id": 95,
                "title": "id minus libero illum nam ad officiis",
                "body": "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
            }, {
                "userId": 10,
                "id": 96,
                "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
                "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
            }]
        }

        // Results es el array que contendra los valores retornados por la busqueda


        /**
         * Funcion que maneja el scroll en la navegacion para la interaccion con las flechas de direccion.
         * @function gotoAnchor
         * @param {Integrer} x - Indice de elemento para scrollear.
         * @desc Recibe el indice del elemento y scrollea automaticamente para la visibilidad del elemento.
         */

        $scope.gotoAnchor = function(x) {
            var newHash = 'anchor-' + x;
            if ($location.hash() !== newHash) {
                // set the $location.hash to `newHash` and
                // $anchorScroll will automatically scroll to it
                $location.hash(newHash);
            } else {
                // call $anchorScroll() explicitly,
                // since $location.hash hasn't changed
                $anchorScroll();
            }
        };

         /**
          *  Funcion que es ejecutada cuando se toca la tecla arriba, resta 1 al elemento seleccionado para "bajar" en la lista de navegacion.
          *  @function upKeyPressed
          */

        $scope.upKeyPressed = function() {
            if ($scope.selected > 0) {
                $scope.selected = $scope.selected - 1;
            }
            $scope.gotoAnchor($scope.selected);
        }

        /**
         *  Funcion que es ejecutada cuando se toca la tecla abajo, suma 1 al elemento seleccionado para "subir" en la lista de navegacion.
         *  @function downKeyPressed
         */

        $scope.downKeyPressed = function(totalResults) {
            if ($scope.selected < totalResults - 1) {
                $scope.selected = $scope.selected + 1;
            }
            $scope.gotoAnchor($scope.selected);
        }

        /**
         *  Funcion que es ejecutada cuando se toca la tecla enter, elimina del array de resultados el elemento seleccionado y lo agrega a la lista de añadidos.
         *  @param {Integrer} selected - Indice de elemento seleccionado.
         *  @function enterKeyPressed
         */

        $scope.enterKeyPressed = function(selected) {
            $scope.itemsAdded.push($scope.results[selected]);
            $scope.results.splice(selected, 1);
        }

        /**
         *  Funcion que es ejecutada cuando se desea eliminar un elemento, elimina del array de añadidos el elemento seleccionado y lo agrega a la lista de resultados.
         *  @param {Integrer} selected - Indice de elemento seleccionado.
         *  @function removeItem
         */

        $scope.removeItem = function(selected) {
            $scope.results.push($scope.itemsAdded[selected]);
            $scope.itemsAdded.splice(selected, 1);
        }

        /**
         *  Funcion que es ejecutada cada vez que se teclea en el input de busqueda, genera la navegacion si se teclea las flechas de direccion pero en caso contrario
            genera un nuevo array de resultados dependiendo de la busqueda.
         *  @param {Object} e - Evento de keyDown.
         *  @function activeNavigation
         */

        $scope.activeNavigation = function(e) {
            var ar=new Array(33,34,35,36,37,38,39,40);
            var keyCode = e.keyCode;

            if(ar.indexOf(keyCode) > -1) {
                e.preventDefault();
            }

            if ($scope.results) {
                var totalResults = $scope.results.length;
            }

            switch (keyCode) {                
                case 38: //up
                    $scope.upKeyPressed();
                    return true;
                case 40: //down
                    $scope.downKeyPressed(totalResults);
                    return true;
                case 13: //enter
                    $scope.enterKeyPressed($scope.selected);
                    if ($scope.selected > 0) {
                        $scope.selected = $scope.selected - 1;
                    }
                    return true;
                default:
                    var inp = String.fromCharCode(keyCode);
                    if (/[a-zA-Z0-9-_\b]/.test(inp)) {
                        $scope.results = [];
                        $scope.results = test[Math.floor((Math.random() * 3) + 1)];
                        $scope.selected = 0;
                        return false;    
                    }

            }
        };
    }])
