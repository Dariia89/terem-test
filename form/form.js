// форма

// задание 2.6 я не совсем поняла, поэтому просто оставила свои тщетные попытки разобраться в комментарии

// const getData = async () => {
//     // let xhr = new XMLHttpRequest();
//     // xhr.open('GET', './test.json', true);
//     // xhr.onreadystatechange = () => {
//     //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//     //         alert('Great!');
//     //     } else {
//     //         alert('Fail!');
//     //     }
//     // }
//     // xhr.send();


//  или


//     // await fetch('./test.json').then(response => {
//     //     if (response.ok) {
//     //         alert('Great');
//     //     } else {
//     //         alert('Fail');
//     //     }
//     // })
// }

//2.5
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

        // getData();
    });
});


