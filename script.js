
const API_URL = 'http://localhost:3000/books'

const form = document.getElementById('form')
const input = document.getElementById('input')
const main = document.getElementById('main')
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
        const {title, author, pages, description, image} = book
    
      
    
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
    } )


}
//prevent form submission
form.addEventListener('submit', (e) => {
    e.preventDefault()

    // const inputTerm = input.value

    // if(inputTerm !== '') {
    //     getBooks(API_URL + inputTerm)

    //     input.value = ""
    // }else {
    //     window.location.reload()
    // }
})

//Mark the read books
const noti = document.getElementsByClassName('fa-solid fa-book-open')
const select = document.querySelector('.select')
const button = document.querySelector('.add')

for(but of button) {
    but.addEventListener('click', (e) => {
        const read = Number(noti.getAttribute('data-count') || 0)
        noti.setAttribute('data-count', read + 1)
        noti.classList.add('zero')
    })
} 