let doc_button = document.querySelector('button');
doc_button.addEventListener('click',inputMsg);

function inputMsg(){
    let msg = alert('Namaste World!!');
    let name = prompt ('Enter the name');
    doc_button.textContent='ROll no. 1: ' + name;
}

