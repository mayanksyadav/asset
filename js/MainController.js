angular.module('myApp', [])
  .controller('MainController', ['$scope', function($scope) { 

$scope.hiw = 
  	{ 
    	image: 'Question-mark-33980736_thumbnail.jpg', 
    	text: 'Asset management is a systematic process of deploying, operating, maintaining, upgrading, and disposing of assets cost-effectively. The term is most commonly used in the financial world to describe people and companies that manage investments on behalf of others.The User can Add or remove Department and Catagory', 
  	};

$scope.features = 
  	{ 
    	image: 'api.png', 
    	text: 'Just login and enjoy all facilities of a Asset Management with friendly User Interface.', 
  	};

$scope.aboutus = 
  	{ 
    	image1: 'Mayank1.jpg' , 
    	text1: 'Mayank Yadav',
      text2:'mayankcool0448@gmail.com',
      image2:'DD.jpg',
      text3:'Divya Das',
      text4:'divyadass11@gmail.com', 
  	};

$scope.contactus = 
  	{ 
    	image: 'Contact-us.jpg', 
    	textm: 'divyadass11@gmail.com ',
      textp: '9723161441',
      textf: '', 
  	};

$scope.footer={
  text:'Copyright 2016 TIED. All Rights Reserved',
};

}]);
