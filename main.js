//FAQ Filter Button Tags

//FAQ Tabs

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("faqtog");
    var faqtab = this.nextElementSibling;
    if (faqtab.style.maxHeight) {
        faqtab.style.maxHeight = null;
    } else {
        faqtab.style.maxHeight = faqtab.scrollHeight + "px";
    } 
  });
}