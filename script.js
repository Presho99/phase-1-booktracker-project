
// //Select elements
// const API_URL = 'http://localhost:3000/books'
// const form = document.getElementById('form')
// const input = document.getElementById('input')
// const main = document.getElementById('main') 

// getBooks(API_URL)
// //Create a function to get books
// function getBooks(url) {
//     fetch(url)
//     .then(res => res.json)
//     .then(books=> showBooks(books))
// }

// //Create a function to show the books and their properties
// function showBooks(books) {
//     main.innerHTML = ''
//     books.forEach((book)=> {
//         const {title, author, pages, description, image} = book
//         const bookEl = document.createElement('div')
//         bookEl.classList.add('book')


//         bookEl.innerHTML = `
//         <div class="book">
//         <img src="${image}" alt="${title}">
//         <div class="info">
//            <h3>${title}</h3> 
//            <h4>${author}</h4>
//            <span class="rating">${pages}</span>
//         </div>
        
//            <div class="synopsis">
//             <div class="text">
//                 <h3>synopsis</h3>
//                 <p>${description}</p>
//                </div>
              
//                <button class="add"><span>To read</span></button>
//            </div>
//     </div>

//         `
//         main.appendChild(bookEl)


//     })
// }




// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const inputTerm = input.value

//     if(inputTerm && inputTerm !== ' ') {
//         getBooks(API_URL + inputTerm)

//         input.value = " "
//     }
//     else {
//         window.location.reload()
//     }
// })

const API_URL = 'http://localhost:3000/books'

const form = document.getElementById('form')
const input = document.getElementById('input')
const main = document.getElementById('main')
//get initial movies

getBooks(API_URL)

function getBooks(url) {
    fetch(url)
    .then(res => res.json())
    .then(books => showBooks(books))
}

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

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const inputTerm = input.value

//     if(inputTerm && inputTerm !== '') {
//         getBooks(API_URL + inputTerm)

//         input.value = ""
//     }else {
//         window.location.reload()
//     }
// })