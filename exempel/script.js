
function removeDataFromTable(radIdToDelete) {
    document.querySelector("[id=" + radIdToDelete.getAttribute("id") + "]").remove();
    clearSelections();
}

//Rensa bort alla selections i tabellen och återställ knapp
function clearSelections(){
    document.querySelectorAll("tr").forEach(item => {
        if (item.classList.contains("selectedRow")){
            item.classList.replace("selectedRow","unselectedRow");        
        }
        })
    //Återställ knapp
    document.querySelector("#sendButton").setAttribute("Value","Placera i tabellen");
    document.querySelector("#sendButton").setAttribute("onclick","addDataToTable()")
}

incCounter = 0

//Lägg till rad till tabell med querySelector och createElement och ta hänsyn till om raden bara ska uppdateras
function addDataToTable(rowInEdit = 0) {
    console.log(rowInEdit)
    const myDataTable = document.querySelector("#myDataTable");
    let nyRad;
    let radId;
    let formcontent;
    if (rowInEdit == 0){
        incCounter++;
        nyRad = document.createElement("tr");
        radId = "RowId" + incCounter;
        nyRad.setAttribute("id",radId);
        nyRad.setAttribute("class","unselectedRow");
        //Skapa det nya innehållet
        formcontent = `
        <td id="namePerson${radId}" onclick="editDataInTable(${radId})">${document.getElementById("namePerson").value}</td>
        <td id="agePerson${radId}">${document.getElementById("agePerson").value}</td>
        <td id="coolPerson${radId}">${document.getElementById("coolPerson").checked}</td>
        <td><input type="button" class="remButt" value="Ta bort ${document.getElementById("namePerson").value}" onclick="removeDataFromTable(${radId})"></td>
        `;
    }
    else{
        radId = "RowId" + rowInEdit;
    }
    
    //Stoppa in allting i befintlig tabell
    if(rowInEdit == 0){
        nyRad.innerHTML = formcontent;
        myDataTable.append(nyRad)
    }
    else{
        console.log("radId : ",radId)
        console.log("rowInEdit : ",rowInEdit)
        document.querySelector("[id=namePerson" + rowInEdit.getAttribute("id") + "]").innerText = document.querySelector("#namePerson").value;
        document.querySelector("[id=agePerson" + rowInEdit.getAttribute("id") + "]").innerText = document.querySelector("#agePerson").value;
        console.log("Före : ",  document.querySelector("[id=coolPerson" + rowInEdit.getAttribute("id") + "]").innerText)
        document.querySelector("[id=coolPerson" + rowInEdit.getAttribute("id") + "]").innerText = document.querySelector("#coolPerson").checked;
        console.log("Efter : ",  document.querySelector("#coolPerson").innerHTML)
        //Nollställ editData i submit-knappen när redigering (edit) är färdig och ta bort edit-markeringen (border) samt ändra texten på knappen
        clearSelections();
    }
    
}





