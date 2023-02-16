let id=1;
function addForm(){
    const newBlock =document.createElement('div');
    newBlock.innerHTML=`
    <input type="text" id=${id+1} name="task">
    <button onclick="get()">+</button>
`;
    const myElement=document.querySelector('body').appendChild(newBlock);
    id+=1;
}
function get(){
    let element=document.getElementById(`${id}`);
   let length=element.value.length;
    alert(length);
    if(length>0){
        addForm();
    }
}



