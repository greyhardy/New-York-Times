$(document).ready(function() {
	

$("#submit").on("click", function() {

event.preventDefault();

var searchTerm = $("#searchTerm").val();
var retrieveThisMany = $("#retrieveThisMany").val();
var startYear = $("#startYear").val();
var endYear = $("#endYear").val();


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "60064f02c0cb48578b7deb817fa16075",
  'q': searchTerm,
  'begin_date': "20170221",
  'end_date': "20170513",
  'sort': "newest",
  'page': 0

});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});



})
