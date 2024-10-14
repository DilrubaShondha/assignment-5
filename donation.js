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

