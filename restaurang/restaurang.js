function addDataToTable() {
  var inner = document.getElementById("testform").innerHTML;
  let formcontent = "<tr>\n";

  if (document.querySelector("#bäver").checked) {
    var bävercount = document.querySelector("#bävermängd").value;
    var bäverlagad = document.querySelector("#bäverlagning").value;

    if (document.querySelector("#bäverportion").checked) {
      formcontent += `<td>Benbrotts-bäver Barnportion ${bävercount}st ${bäverlagad}/100 tillagad</td>`;
    } else {
      formcontent += `<td> Benbrotts-bäver ${bävercount}st ${bäverlagad}/100 tillagad </td>`;
    }
  }

  if (document.querySelector("#rådjur").checked) {
    var rådjurcount = document.querySelector("#rådjursmängd").value;
    var rådjurlagad = document.querySelector("#rådjurslagning").value;

    if (document.querySelector("#rådjursportion").checked) {
      formcontent += `<td> Rawdjur barnportion ${rådjurcount}st ${rådjurlagad}/100 tillagad</td>`;
    } else {
      formcontent += `<td> Rawdjur ${rådjurcount}st ${rådjurlagad}/100 tillagad</td>`;
    }
  }

  if (document.querySelector("#älg").checked) {
    var älgcount = document.querySelector("#älgmängd").value;
    var älglagad = document.querySelector("#älglagning").value;

    if (document.querySelector("#älgportion").checked) {
      formcontent += `<td> Älg Barnportion ${älgcount}st ${älglagad}/100 tillagad</td>`;
    } else {
      formcontent += `<td> Älg ${älgcount}st ${älglagad}/100 tillagad</td>`;
    }
  }

  if (document.querySelector("#mink").checked) {
    var minkcount = document.querySelector("#minkmängd").value;
    var minklagad = document.querySelector("#minklagning").value;

    if (document.querySelector("#minkportion").checked) {
      formcontent += `<td> Mankey Barnportion ${minkcount}st ${minklagad}/100 tillagad</td>`;
    } else {
      formcontent += `<td> Mankey ${minkcount}st ${minklagad}/100 tillagad</td>`;
    }
  }

  if (document.querySelector("#sill").checked) {
    var sillcount = document.querySelector("#sillmängd").value;
    var silllagad = document.querySelector("#silllagning").value;

    if (document.querySelector("#sillportion").checked) {
      formcontent += `<td> Silly Barnportion ${sillcount}st ${silllagad}/100 tillagad</td>`;
    } else {
      formcontent += `<td> Silly ${sillcount}st ${silllagad}/100 tillagad</td>`;
    }
  }
  if (document.querySelector("#duva").checked) {
    var duvcount = document.querySelector("#duvmängd").value;
    var duvlagad = document.querySelector("#duvlagning").value;

    if (document.querySelector("#duvportion").checked) {
      formcontent += `<td> Dove Barnportion ${duvcount}st ${duvlagad}/100 tillagad</td>`;
    } else {
      formcontent += `<td> Dove ${duvcount}st ${duvlagad}/100 tillagad</td>`;
    }
  }
  if (document.querySelector("#datum").value) {
    formcontent += `<td>${document.querySelector("#datum").value}</td>`;
  }

  if (document.querySelector("#kockmeddelande").value) {
    formcontent += `<td>${
      document.querySelector("#kockmeddelande").value
    }</td>`;
  }
  formcontent += "\n</tr>";
  const formcontent2 = `<label> ${formcontent} </label><br>`;
  document.getElementById("testform").innerHTML = inner + formcontent2;
}
