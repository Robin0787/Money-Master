

const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothes = document.getElementById('clothes');
const calculate = document.getElementById('calculate');
const totalExpenses = document.getElementById('totalExpenses');
const balance = document.getElementById('balance');
const saveInput = document.getElementById('saveInput');
const saveBtn = document.getElementById('saveBtn');
const savingAmount = document.getElementById('savingAmount');
const remainingBalance = document.getElementById('remainingBalance');

// Event for income input
income.addEventListener('input', function(){
    totalExpenses.value = '';
    balance.value = '';
    saveInput.value = '';
    saveInput.disabled = true;
    savingAmount.value = '';
    remainingBalance.value = '';
    if(this.value > 0) {
        food.disabled = false;
    } else {
        food.disabled = true;
    }
})

// Event for food input
food.addEventListener('input', function(){
    totalExpenses.value = '';
    balance.value = '';
    saveInput.value = '';
    saveInput.disabled = true;
    savingAmount.value = '';
    remainingBalance.value = '';
    if(parseFloat(this.value) <= parseFloat(income.value)) {
        rent.disabled = false;
    }
    else if(parseFloat(this.value) > parseFloat(income.value)) {
        rent.disabled = true;
        alert('Food expense should not bigger than your income');
    } else {
        rent.disabled = true;
    }
})
// Event for rent input
rent.addEventListener('input', function(){
    totalExpenses.value = '';
    balance.value = '';
    saveInput.value = '';
    saveInput.disabled = true;
    savingAmount.value = '';
    remainingBalance.value = '';
    if(parseFloat(this.value) + parseFloat(food.value) <= parseFloat(income.value)) {
        clothes.disabled =false;
    } 
    else if (parseFloat(this.value) + parseFloat(food.value) > parseFloat(income.value)) {
        alert('Your income should not less than your expenses');
        clothes.disabled = true;
    } else {
        clothes.disabled = true;
    }
})
// Event for clothes input
clothes.addEventListener('input', function(){
    totalExpenses.value = '';
    balance.value = '';
    saveInput.value = '';
    saveInput.disabled = true;
    savingAmount.value = '';
    remainingBalance.value = '';
    if(parseFloat(this.value) + parseFloat(rent.value) + parseFloat(food.value) <= parseFloat(income.value)) {
        calculate.disabled = false;
    } 
    else if(parseFloat(this.value) + parseFloat(rent.value) + parseFloat(food.value) > parseFloat(income.value)) {
        alert('Your expenses should not bigger than your income');
        calculate.disabled = true;
    } else {
        calculate.disabled = true;
    }
})

// Event for calculate button
calculate.addEventListener('click', function () {
    const allExpenses = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(clothes.value);
    
    totalExpenses.value = allExpenses;
    balance.value = parseFloat(income.value) - allExpenses;
    if(balance.value > 0) {
        saveInput.disabled = false;
    } else {
        balance.style.color= 'red';
        saveInput.disabled = true;
    }
}) 
// Event for saveInput
saveInput.addEventListener('input', function(){
    if(parseFloat(this.value) >= 0 && parseFloat(this.value) <= 100) {
        saveBtn.disabled = false;
    }
    else if(parseFloat(this.value) < 0 || parseFloat(this.value) > 100) {
        alert('You must put any number between 0 to 100.');
        saveBtn.disabled = true;
    }
    else {
        saveBtn.disabled = true;
    }
})
// Event for save button
saveBtn.addEventListener('click', function(){
    
    const amountForSavingInput = parseFloat(balance.value) * parseFloat(saveInput.value) / 100;
    savingAmount.value = amountForSavingInput;
    remainingBalance.value = parseFloat(balance.value) - amountForSavingInput;
})

