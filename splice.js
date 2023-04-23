let array = [1, 7, 3, 1, 0, 20, 77];
let startIndex = document.getElementById("startIndex");
let deleteCount = document.getElementById("deleteCount");
let itemToAdd = document.getElementById("itemToAdd");
let spliceBtn = document.getElementById("spliceBtn");
let updatedArray = document.getElementById("updatedArray");


updatedArray.textContent = JSON.stringify(array);

spliceBtn.onclick = ()=>{
    if (startIndex.value === ""){
        alert("Enter Start Index")
    }else{
        array.splice(startIndex.value,deleteCount.value,itemToAdd.value)
        updatedArray.textContent = JSON.stringify(array)
    }
}
