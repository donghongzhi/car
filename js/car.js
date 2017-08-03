var app=angular.module("car",["ng","ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
        .when("/home",{
            templateUrl:"tpl/home.html",
            controller:"homeCtrl"
        })
        .when("/list",{
            templateUrl:"tpl/list.html",
            controller:"listCtrl"
        })
        .when("/detail/:id",{
            templateUrl:"tpl/detail.html",
            controller:"detailCtrl"
        })
        .when("/repair",{
            templateUrl:"tpl/repair.html",
            controller:"repairCtrl"
        })
        .when("/contact",{
            templateUrl:"tpl/contact.html"
        })
        .when("/login",{
            templateUrl:"tpl/login.html",
            controller:"loginCtrl"
        })
        .when("/404",{
            templateUrl:"tpl/404.html"
        })
        .otherwise({redirectTo:"/home"});
});
app.controller("parentCtrl",["$scope","$location",function($scope,$location){
    // 页面跳转
    $scope.jump=function(desjump){
        $location.path(desjump);
    };
}]);
//主页面
app.controller("homeCtrl",["$scope",function($scope){
    $scope.homeList=[
        {img:"pic1.jpg",name:"奥迪A3"},{img:"pic2.jpg",name:"iulietta"},{img:"pic3.jpg",name:"林肯"},{img:"pic4.jpg",name:"Dart"},
        {img:"pic5.jpg",name:"奔驰A级"},{img:"pic6.jpg",name:"奔驰B级"},{img:"pic7.jpg",name:"奔驰CLA级"},{img:"pic8.jpg",name:"奔驰CLA级<AMG></AMG>"}
    ];
}]);
//列表页
app.controller("listCtrl",["$scope", function($scope){
    $scope.listList=[
        "8.jpg","2.jpg","3.jpg"
    ];
}]);
//维修页
app.controller("repairCtrl",["$scope",function($scope){
    $scope.repairList=[
        "r_pic1.jpg","r_pic2.jpg","r_pic3.jpg","r_pic4.jpg","r_pic5.jpg","r_pic6.jpg","r_pic7.jpg","r_pic8.jpg"
    ];
}]);
//详情页
app.controller("detailCtrl",["$scope","$routeParams",function($scope,$routeParams){
    //home、list、repair传参给详情页面
    $scope.msg=$routeParams.id;
}]);
//登录页
app.controller("loginCtrl",["$scope",function($scope){
    //表单提交
    $scope.handleSubmit=function(){
        console.log($scope.user_name+":"+$scope.user_pwd);
    };
}]);

// var nav=document.getElementById("nav");
// nav.addEventListener("click",function(e){
//     e.stopPropagation();
//     e.target.className="active";
  
// });