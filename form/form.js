// форма
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', async function formSend(e) {
        e.preventDefault();

        let formData = new FormData(form);

        let data = {};
        formData.forEach((value, key) => {
            data[key] = value
        });
        
        let json = JSON.stringify(data);
        let dataBlock = document.querySelector('.data');

        dataBlock.style.visibility = 'visible';
        dataBlock.innerHTML = `${json}`;
    });
});