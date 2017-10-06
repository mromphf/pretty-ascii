(function() {
    var cells = document.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++ ) {
        cells[i].title = "Click to copy";
        cells[i].addEventListener("click", function(event) {
            var text = document.getElementsByTagName("textarea")[0];
            text.innerHTML = event.target.innerHTML;
            text.select();
            document.execCommand('copy');
        });
    };
})();
