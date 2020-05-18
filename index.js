const gify = {
  key: "eFDs2QCOWbqZUI2nmuXAmHeJ7klyQzK0",
  url: "api.giphy.com/v1/gifs/search",
};

$("#search").on("keypress", function (e) {
  $(".gif").remove();
  $("#search-results").removeClass("show");
  if (e.keyCode == 13) {
    results(e.target.value);
    e.target.value = "";
  }
});

function results() {
  var searchTerm = $("#search").val();
  $("#search-results").addClass("show");
  var xhr = $.get(`http://${gify.url}?q=${searchTerm}&api_key=${gify.key}&limit=30`);
  xhr.done(function (response) {
    for (i in response.data) {
      $("#search-results").append("<img class='gif' src='" + response.data[i].images.original.url + "'/>");
    }
  });
}

$("#search-results").click(function (e) {
  console.log(e.originalEvent.srcElement.currentSrc);

  var pic = e.originalEvent.srcElement.currentSrc;
  $(".popup").addClass("active");
  $("#img-popup").attr("src", pic);
});

$(".cross").click(function () {
  $(".popup").removeClass("active");
});
