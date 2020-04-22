const elementDiv = document.querySelector('.messages');
const API_URL = 'http://localhost:5023/blog';

function listallmess(){
    elementDiv.textContent = '';
    fetch(API_URL).then(response => response.json()).then(mess => {
        console.log(mess);
        mess.reverse();
        mess.forEach( m => {
            const div = document.createElement('div');
            const header = document.createElement('h3');
            header.textContent = m.title;
            const header2 = document.createElement('h5');
            header2.textContent = m.theme;
            const contents =document.createElement('p');
            contents.textContent = m.content;
            const datecreated = document.createElement('small');
            datecreated.textContent = new Date(m.created);
            //header.style.left = '10px';

            div.appendChild(header);

            div.appendChild(header2);
            div.appendChild(contents);
            div.appendChild(datecreated);
             div.style.backgroundColor = "white";
            // div.style.color = 'red';
            div.style.margin = '15px';
            div.style.borderRadius = '4px';

            elementDiv.appendChild(div);
        });
    });

}

listallmess();
