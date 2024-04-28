const form = document.querySelector('#form');
const inputName = document.querySelector('#name-contact');
const inputNumber = document.querySelector('#number-contact');
const tableBody = document.querySelector('#table-body');
const amountContact = document.querySelector('#amount-contact');
const tbodyRemove = document.querySelector('#tbody-remove')
let arrContact = [];

const amountOfContact = () => {
    let objContat = {name: inputName.value, number: +inputNumber.value};
    arrContact.push(objContat);
    console.log(arrContact)
    let numberAmount = arrContact.length.toString().padStart(2, '0');
    if(arrContact.length <= 1) {
        amountContact.innerText = `${numberAmount} contato`
    } else {
        amountContact.innerText = `${numberAmount} contatos`
    }
}




const inputValues = () => {
    tableBody.innerHTML += `
    <tr>
    <td>${inputName.value}</td>
    <td>${inputNumber.value}</td>
    </tr>
    `;

    amountOfContact();
    inputName.focus();
    inputName.value = '';
    inputNumber.value = '';
}

const handleSubmit = (ev) => {
    ev.preventDefault();
    tbodyRemove.remove();
    inputValues();
}

const initSubmitForm = () => {
    form.addEventListener('submit', (ev) => {
        handleSubmit(ev)
    })
}



export default initSubmitForm;