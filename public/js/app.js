$(document).ready(function(){

	console.log("jquery/js files connected");
	
	$("#form_for_post").toggle();
	$("#form_for_login").toggle();


	$("#hide_reveal").on("click",function(){
		$("#form_for_post").toggle();
	});

	$("#signin").on("click",function(){
		$("#form_for_login").toggle();
	});

});

$(".form_for_comment").toggle();
$(".form_for_update").toggle();
var app = angular.module('blog', []);