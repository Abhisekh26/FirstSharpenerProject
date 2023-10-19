
var buton=document.getElementById("rahul")
buton.addEventListener("click",function(){
   var x=document.getElementById("formGroupExampleInput1").value;
   var y=document.getElementById("formGroupExampleInput2").value
   var z=document.getElementById("formGroupExampleInput").value
    // console.log(x)
    // console.log(y)
    // console.log(z)
    let myobj={
        amount:x,
        description:y,
        category:z 

    };
    let myobj_serial=JSON.stringify(myobj);
    //console.log(myobj_serial)
    localStorage.setItem(y,myobj_serial)
     displayUser(myobj)
})
function displayUser(obj){
var parente=document.querySelector(".rocky")
var childe=document.createElement("li")

childe.textContent= obj.amount+ " - " +obj.description + " - " +obj.category+ " "
parente.appendChild(childe)
var editb=document.createElement("input")
editb.type="button"
editb.value="Edit"
var deleteb=document.createElement("input")
deleteb.type="button"
deleteb.value="Delete"
childe.appendChild(deleteb)
childe.appendChild(editb)
deleteb.onclick=()=>{
    localStorage.removeItem(obj.description)
    parente.removeChild(childe)
}
editb.onclick=()=>{
    document.getElementById("formGroupExampleInput1").value=obj.amount
    document.getElementById("formGroupExampleInput2").value=obj.description
    document.getElementById("formGroupExampleInput1").value=obj.category
    localStorage.removeItem(obj.description)
    parente.removeChild(childe)

}
}