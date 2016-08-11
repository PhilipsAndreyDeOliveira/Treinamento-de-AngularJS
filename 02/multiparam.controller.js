angular.module("myApp", [])
.controller("control", function($scope){

  $scope.cadastrar = cadastrar
  $scope.contatos = [];

  function cadastrar(contato){
    $scope.contatos.push({
      nome: contato.nome,
      idade: contato.idade,
      telefone: contato.telefone
    });
    console.log(contato);
  }
})
