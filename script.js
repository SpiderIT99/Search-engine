window.addEventListener('load', readMe);
function readMe(){alert("wpisz nazwe napoju w okno z wyszukiwaniem wpisz np. litere \"m\" albo \"pepsi\"")};


const search = document.querySelector('#search');
const li = document.querySelectorAll('li');

const searchEngine = e => {
    const text = e.target.value.toLowerCase();
    
    li.forEach(el =>{
        if(el.textContent.toLowerCase().indexOf(text) !== -1){
            el.style.display = 'blok';
        }
        else{
            el.style.display = 'none';
        }
    })
}

search.addEventListener('keyup', searchEngine);