
const API_URL = 'http://localhost:3000/books'

const form = document.getElementById('form')
const input = document.getElementById('input')
const main = document.getElementById('main')

const toggle = document.querySelector('.toggle')


const book = document.querySelector('.book')


//prevent form submission
form.addEventListener('submit', (e) => {
    e.preventDefault()
     
})

//hideMenu
function hideMenu(){
    const container = document.getElementById('container')
    if(container.className == "off") {
        container.className = "on"
    }else {
        container.className = "off"
    }
}



//hide menu
// function hideMenu() {
//     const container = document.getElementById('container')
//       if(container.className == "off") {
//           container.className = "on"

//       }else{
//           container.className = "off"
//       }
// }


//get the books

getBooks(API_URL)

function getBooks(url) {
    fetch(url)
    .then(res => res.json())
    .then(books => showBooks(books))
}

//show the books

function showBooks(books) {
    main.innerHTML = ""

   books.forEach((book) => {
        const {title, author, pages, description, image, message} = book
        
      
    
        const bookEl = document.createElement('div')
        bookEl.classList.add('book')

        bookEl.innerHTML = `
        <div class="book">
            <img src="${image}" alt="${title}">
            <div class="info">
               <h3>${title}</h3> 
               <h4>${author}</h4>
               <span class="rating">${pages}</span>
            </div>
            
               <div class="synopsis">
                <div class="text">
                    <h3>synopsis</h3>
                    <p>${description}</p>
                   </div>
                  
                   <button class="add"><span>To read</span></button> 
                   
                    
                 

               </div>
        </div>
     
        `

       main.appendChild(bookEl) 
       bookEl.addEventListener("dblclick", function(){
           alert("Yaaay...you're acing it. Let's get lost in another one!")
       })
    } )


}


toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    }else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
    
})






