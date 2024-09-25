// get inner text value
function getTextValue(id) {
    const target = document.getElementById(id).innerText;
    return parseFloat(target);
}
// get input value
function getValue(id) {
    const target = document.getElementById(id).value;
    return parseFloat(target);
}
// history card
function history(amountId, id, text) {
    const div = document.createElement('div');
    div.style.border = "1px solid gray"
    div.style.padding = "32px"
    div.style.borderRadius = "16px"
    div.style.marginTop = "20px"
    const date = new Date();
    div.innerHTML = `<h1 class="text-lg lg:text-xl font-bold">${getValue(amountId)} BDT is ${text}. </h1><p class="text-textColor">Date: ${date} </p>`
    document.getElementById(id).appendChild(div);
}
// total donate sections function
function donate(amount, totalDonationAmount, titleId) {
    const inputValue = getValue(amount);
    const donateAmount = getTextValue(totalDonationAmount);
    const donateTitle = document.getElementById(titleId).innerText;
    const totalRequiredBalance = getTextValue('required-balance');
    if (inputValue < 1 || isNaN(inputValue)) {
        alert(`sorry sir you can't donate less than zero amount`);
        return document.getElementById(amount).value = '';
    }
    else {
        const modal = document.getElementById('my_modal').showModal();
        const historySection = history(amount, 'history-section', donateTitle);
        return document.getElementById(totalDonationAmount).innerText = donateAmount + inputValue, document.getElementById('required-balance').innerText = totalRequiredBalance - inputValue, document.getElementById(amount).value = '', modal, historySection;
    }
}

// donate for noakhali
document.getElementById('donate-btn-noakhali').addEventListener('click', function () {
    donate('amount-noakhali', 'total-noakhali', 'title-noakhali');
});

// donate for feni
document.getElementById('donate-btn-feni').addEventListener('click', function () {
    donate('amount-feni', 'total-feni', 'title-feni');

});
// donate for quota
document.getElementById('donate-btn-quota').addEventListener('click', function () {
    donate('amount-quota', 'total-quota', 'title-quota');
});

// close modal
document.getElementById('closeBtn').addEventListener('click', function () {
    document.getElementById('my_modal').close();
});
// donate button activated
document.getElementById('donation-button').addEventListener('click', function () {
    document.getElementById('donation-button').classList.add('bg-[#B4F461]', 'border-none');
    document.getElementById('history-button').classList.remove('bg-[#B4F461]', 'border-none');

    document.getElementById('donation-container').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});
// history button activated
document.getElementById('history-button').addEventListener('click', function () {
    document.getElementById('history-button').classList.add('bg-[#B4F461]', 'border-none');
    document.getElementById('donation-button').classList.remove('bg-[#B4F461]', 'border-none');

    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donation-container').classList.add('hidden');
});

