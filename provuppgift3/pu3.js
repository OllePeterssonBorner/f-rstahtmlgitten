function sendData() {
  if (document.querySelector("#dropdownmenu").value) {
    var imageid = document.querySelector("#dropdownmenu").value;

    formcontent += `<td>${document.querySelector("../${imageid}.png")}</td>`;
  }

  if (document.querySelector("#thecolor").value) {
    var colorid = document.querySelector("#dropdownmenu").value;

    box4.backgroundcolor = colorid;
  }
}
