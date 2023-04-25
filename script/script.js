import { setModal } from "./modal.js";

setModal()

const dateUl = document.getElementById('dateList')
const blogContentUl = document.getElementById('blogContent')

const getDateSuffix = (number) => {
    if(number % 10 === 1) {
        return 'st'
    } else if(number % 10 === 2) {
        return 'nd'
    } else if(number % 10 === 3) {
        return 'rd'
    } else {
        return 'th'
    }
}

const createDate = (ts) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const suffix = getDateSuffix(ts.getDate())
    return `${months[ts.getMonth()]} ${ts.getDate()+suffix} ${ts.getFullYear()}`
}

const openBlog = (id) => {
    debugger;
    for(let i = 0; i < blogContentUl.children.length; i++) {
        if(!blogContentUl.children[i].classList.toString().includes('hidden')) {
            blogContentUl.children[i].classList.add('hidden')
            
        }
    }
    
    const blogText = document.getElementById(`${id}`) 
    blogText.classList.remove('hidden')
}

fetch("http://localhost:3000/api/blogs")
    .then(response => response.json())
    .then(data => {
        
        data.forEach(obj => {
            
            let ts = new Date(obj.createdAt);
            const formattedDate = createDate(ts)

            const li = document.createElement('li');
            li.innerHTML = `<button id=${obj._id} class="dateText">${formattedDate}</button>`;
            dateUl.appendChild(li)
            const button = document.getElementById(`${obj._id}`);
            

            const blogLi = document.createElement('li');
            blogLi.setAttribute('id', `${obj._id + 1}`);
            blogLi.setAttribute('class', 'blogText hidden');
            blogLi.innerHTML = `<h3>${obj.title}</h3><p>${obj.content}</p>`
            blogContentUl.appendChild(blogLi)

            button.addEventListener('click', () => {
                openBlog(obj._id + 1)
            })
        })
        
    })


