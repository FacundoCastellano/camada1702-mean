/**
 * Created by Facundo Castellano on 30/11/2016.
 */
/* IIFE
* angular.module('My-app',[]); //declarando una aplicacion
* angular.module('My-app');//haciendo referencia a una instancia creada
* */
(function () {
    'use strict';
    angular.module('My-app',[]) //declarando una aplicacion
        .controller('ListProductController', function ($scope) {//Defino el controller y su callback (fn(scope))
            //Declaros las variables titulos
            $scope.titleListProduct = 'Lista de Productos';

            $scope.products = [
                {
                    id: 1,
                    title: 'Computadora Vieja',
                    image: '',
                    price: 500,
                    featured: true,
                    tags: []
                },
                {
                    id: 2,
                    title: 'Otra Computadora Vieja',
                    image: '',
                    price: 10000,
                    featured: true,
                    tags: ['viejo', 'comida']
                }
            ];

            $scope.stars = [
                {
                    title: 'Poor',
                    dataValue: 1
                },
                {
                    title: 'Fair',
                    dataValue: 2
                },
                {
                    title: 'Good',
                    dataValue: 3
                },
                {
                    title: 'Excellent',
                    dataValue: 4
                },
                {
                    title: 'WOW!!!',
                    dataValue: 5
                }
            ];
        })
        .controller('ProductController', function ($scope) {

            $scope.product = {
                title :'Producto',
                description : 'lorem impsum adslkdakqweqew qewqewqwe  qwe q eqw eqwqweqwqewqwe qweqweweqqwe',
                price : '5000$',
                image : '',
                featured : true,
                tags: ['pc', 'apple', 'carisimo']
            };

            $scope.stars = [
                {
                    title: 'Poor',
                    dataValue: 1
                },
                {
                    title: 'Fair',
                    dataValue: 2
                },
                {
                    title: 'Good',
                    dataValue: 3
                },
                {
                    title: 'Excellent',
                    dataValue: 4
                },
                {
                    title: 'WOW!!!',
                    dataValue: 5
                }
            ];
        })
        .controller('NavigationController', function ($scope) {
            $scope.name = 'Facundo Castellano';
        })
        .controller('FeatureProducts', function ($scope) {
            $scope.titleTopProduct = 'Top de Productos';
            $scope.topProducts = [
                {
                    id: 1,
                    title: 'Computadora 1',
                    image: '',
                    price: 500
                },
                {
                    id: 2,
                    title: 'Computadora 2',
                    image: '',
                    price: 800
                },
                {
                    id: 3,
                    title: 'Computadora 3',
                    image: '',
                    price: 300
                },
                {
                    id: 4,
                    title: 'Computadora 4',
                    image: '',
                    price: 590
                },
                {
                    id: 5,
                    title: 'Computadora 5',
                    image: '',
                    price: 700
                },
                {
                    id: 6,
                    title: 'Computadora 6',
                    image: '',
                    price: 10000
                }
            ]
        })
        .controller('NewProductController', function ($scope) {
            $scope.titleNewProduct = 'Nuevo Prodcuto';
            $scope.productForm = {
                labelName: 'Nombre:',
                labelPrice: 'Precio:',
                labelDescription: 'Descripcion:',
                labelImage: 'URL de Imagen:',
                labelSubmit: 'Submit'
            }
        })
})();