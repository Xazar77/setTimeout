'usestrict';


const input = document.querySelector('.input'),
    text = document.querySelector('.text');



function debounce() {
    input.addEventListener('change', () => {
        text.textContent = "";
        const showTextFunc = () => {
            text.textContent = input.value;
            input.value = "";
        };
        setTimeout(showTextFunc, 300);
    });
}
debounce();
















