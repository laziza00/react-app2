

let inputName = document.querySelector('.nameinput')
let inputEamil = document.querySelector('.email')
let inputNumber = document.querySelector('.number')
let box__list= document.querySelector('.box__list')
let form = document.querySelector('#form')
let select = document.querySelector('#selectOne')
let boxText1 = document.querySelector('.nametext')
let boxText2 = document.querySelector('.box__text2')
let boxText3 = document.querySelector('.box__text3')


let newArr =[]




form.addEventListener('submit', (e)=> {
    e.preventDefault()

    let nameText = inputName.value
    let emailText = inputEamil.value
    let numberText = inputNumber.value
    let selectText = select.value

    newArr.push({
        id: newArr.length,
        name: nameText,
        email: emailText,
        number: numberText,
        fcategory: selectText,
    })


    addItems(newArr)
    
    inputName.value = "",
    inputEamil.value = "",
    inputNumber.value ="";



    inputName.style.border ="1px solid rgb(202, 199, 199);";
    boxText1.style.color ="#fff"
    inputEamil.style.border ="1px solid rgb(202, 199, 199);";
    boxText2.style.color ="#fff"
    inputNumber.style.border ="1px solid rgb(202, 199, 199);";
    boxText3.style.color ="#fff"
})


function addItems(newArr) {

    box__list.innerHTML =""
    newArr.forEach((item)=> {

        let li = document.createElement('li');
        li.className = "box__item";
        li.innerHTML = `
        <p class="box__item-name">${item.name}</p>
        <p class="box__item-email">${item.email}</p>
        <p class="box__item-num">${item.number}</p>
        <p class="box__item-email">${item.fcategory}</p>
        <div style="display: flex">
        <button class="box__remove-btn" onclick="deleteItems(${item.id})">
            <i class='bx bx-x'></i>
            </button>
            <button class="box__edit-btn"  onclick="editItems(${item.id})" 
            data-bs-toggle="modal" 
            data-bs-target="#staticBackdropedit">
            <i class='bx bx-edit-alt'></i>
            </button>
</div>
        
        
        
        
        
        
        
`
            box__list.appendChild(li)
    })

    
}





let inputNameEdit = document.querySelector('.nameinput2')
let inputEamilEdit = document.querySelector('.email2')
let inputNumberEdit = document.querySelector('.number2')
let formEditModal = document.querySelector('#form2')
let selectCategory = document.querySelector('#selectOne2')






function editItems(elId) {
    newArr.forEach((item, idx)=> {
        if(idx ==elId) {
            inputNameEdit.value = item.name;
            inputEamilEdit.value = item.email;
            inputNumberEdit.value = item.number;
            selectCategory.value = item.fcategory;

            getEdit(idx)
        }
    })
}
function getEdit(elId) {
    let elCount =1;

    formEditModal.addEventListener('submit', (e)=> {
        e.preventDefault()

        if(elCount==1) {
            newArr[elId].name = inputNameEdit.value
            newArr[elId].email = inputEamilEdit.value
            newArr[elId].number = inputNumberEdit.value
            newArr[elId].fcategory = selectCategory.value

            addItems(newArr)

            elCount++
        }
    })

}

function deleteItems(elId) {
    if(confirm("Are you sure delete it?")){
        newArr = newArr.filter((item)=> {
            if(elId != item.id) {
                return item;
            }
        })
        addItems(newArr)
    }
}


inputName.addEventListener('keyup', (e) => {
    let userNameValue = inputName.value.trim().toLowerCase()

    try{
         if(userNameValue.match(/[a-z]/) !=null && userNameValue.match(/[!@#$%^&*]/)==null && userNameValue!= "" && userNameValue.match(/[0-9]/) ==null) {

            inputName.style.border ="1px solid green" 
            boxText1.style.color ="green"
            throw "Succes"
        }
        else {
            inputName.style.border ="1px solid red";
            boxText1.style.color ="red"
            throw "Error: Usernme cannot be blank"
        }
    }catch(e) {
        boxText1.innerHTML = e
    }
})

inputEamil.addEventListener('keyup', (e) => {

    let emailValue = inputEamil.value.trim().toLowerCase()
try {
        if(emailValue.includes("@")  && emailValue !="" || emailValue.match(/[0-9]/) !=null ) {

            inputEamil.style.border ="1px solid green"
            boxText2.style.color ="green"
            throw "Success";
    }
    else {
        inputEamil.style.border ="1px solid red"
        boxText2.style.color ="red"
        throw "Email be cannot be blank";
    }
    }catch(e) {
    boxText2.innerHTML = e
}
})

inputNumber.addEventListener('keyup', (e) => {
 
    let numberValue = inputNumber.value.trim()
    try {
        if(numberValue.includes("+") &&  numberValue != "" ||numberValue.match(/[0-9]/) !=null && numberValue.length<=12 ) {

            inputNumber.style.border="1px solid green"
            boxText3.style.color ="green"
            throw "Success";
    }
    else {
        inputNumber.style.border = "1px solid red"
        boxText3.style.color ="red"
        throw "number be cannot be blank";
    }
    }catch(e) {
         boxText3.innerHTML = e
}
})


let headerInput = document.querySelector('.header__input')
let box__addInput = document.querySelector('.box__add-input')

headerInput.addEventListener('keyup', ()=> {

    let inputText = headerInput.value.toLowerCase()
    let itemTextItem = document.querySelectorAll('.box__item-name');

    itemTextItem.forEach((item)=> {
        if(item.firstChild.textContent.toLocaleLowerCase().includes(inputText)) {
            item.parentNode.style.display =""
        }else {
            item.parentNode.style.display ="none"
        }
    })
})

box__addInput.addEventListener('keyup', ()=> {
    let inputText = box__addInput.value.toLowerCase()
    let itemTextItem = document.querySelectorAll('.box__item-name');

    itemTextItem.forEach((item)=> {
        if(item.firstChild.textContent.toLocaleLowerCase().
   includes(inputText)) {
            item.parentNode.style.display =""
        }else {
            item.parentNode.style.display ="none"
        }
    })
})