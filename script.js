const mail = document.querySelector('#email');
const submit = document.querySelector('#submit');
const inputs = document.querySelectorAll('input');
const agree = document.querySelector('#check');
let points = 0;

const patterns = {
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
};

function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid';
        points = 0;
    } else {
        field.className = 'invalid';
        points = 1;
    }
}

mail.addEventListener('keyup', function(e) {
    validate(e.target, patterns[e.target.attributes.name.value]);
});

submit.addEventListener('click', function() {
    let num = 0;
    inputs.forEach(function(input){
        if (input.value == '') {
            num++;
        }
    })
    if (!agree.checked) {
        num++;
    }
    num = num + points;
    if (num > 0) {
        alert('Wszystkie pola są wymagane');
    }
    else {
        alert('Formularz zapisany');
    }
});