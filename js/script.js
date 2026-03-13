const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

//funções
const createTable = (number,multiplicationNumber)=>{
    multiplicationTable.innerHTML = "";

    for(i=1; i<=multiplicationNumber;i++){
        const result = number*i;
        const template = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
        </div>`;
    }
}

