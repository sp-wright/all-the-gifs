const api = {
  key: "/search?api_key=nToCgEWXWhkvyisbiP0ZmX0CiJWNpPZQ&q=",
  url: "https://api.giphy.com/v1/",
};

$("#search").on("keypress", function (e) {
  var searchTerm = e.target.value;
  $(".gif").remove();
  $("#search-results").removeClass("show");
  if (e.keyCode == 13) {
    var selection = $(".checkbox").is(":checked");
    if (selection === true) {
      var choice = "stickers";
    } else {
      var choice = "gifs";
    }
    getGIFS(searchTerm, choice);
    e.target.value = "";
  }
});

function getGIFS(searchTerm, choice) {
  fetch(`${api.url}${choice}${api.key}${searchTerm}&limit=30&offset=0&rating=G&lang=en`)
    .then((response) => response.json())
    .then((info) => {
      var info = info.data;
      results(info);
    });
}

function results(info) {
  $("#search-results").addClass("show");
  for (i in info) {
    $("#search-results").append("<img class='gif' src='" + info[i].images.original.url + "'/>");
  }
}

$("#search-results").click(function (e) {
  var pic = e.originalEvent.srcElement.currentSrc;
  $(".popup").addClass("active");
  $("#img-popup").attr("src", pic);
});

$(".cross").click(function () {
  $(".popup").removeClass("active");
});
