var temp_str=""

// get all link tags in the page
var links = document.getElementsByTagName("a");

// replace epdf to pdf
for(var i=0; i<links.length; i++) {
    temp_str=links[i].href;
    links[i].href=temp_str.replace("epdf", "pdfdirect");
}


