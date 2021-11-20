async function getResponse() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let content = await response.json();
    content = content.splice(0, 10)

    let list = document.querySelector('.posts')


    let key;
    for (key in content) {
        list.innerHTML += `

            <li id="posts">
               <h4>${content[key].title}</h4>
               <img src="https://www.vrgid.com/wp-content/uploads/2021/09/webvr-sites-870x400.jpg" width="400" alt = "Изображение">
               <div id="list2">
               <button name="show" onClick="alertPost()">Показать</button>
               <button name="delete" onClick="deletePost()">Удалить</button>
            </div>
            </li>
            
              
        `
    }
    for (let i = 0; i < key + 1; i++) {
        let list = document.querySelectorAll('li')[i];
        let list2 = document.querySelectorAll('div')[i];
        list.style.textTransform = `capitalize`;
        list.style.border = '1px solid #bababa';
        list.style.minHeight = '320px';
        list.style.maxWidth = '420px';
        list.style.margin = '10px';
        list.style.background = '#f0f0f0';
        list.style.listStyleType = 'none';
        list.style.paddingLeft = '20px';
        list2.style.marginTop = '5px';
    }
}

console.log(getResponse());


function deletePost() {
       let elem = document.getElementById("posts");
       elem.remove();

}

function alertPost() {
       let elem = document.getElementById("posts");
       alert(elem.textContent);
}
