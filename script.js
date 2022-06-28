
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:patterson&key=AIzaSyCgmtkpLHreksPZH0AKIyutF6ovgEbadKI'
const ID_URL = `https://www.googleapis.com/books/v1/volumes/`
const form = document.getElementById('form')
const input = document.getElementById('input')
const main = document.getElementById('main')

const toggle = document.querySelector('.toggle')
const back = document.querySelector('.back')
back.style.display = "none"
back.addEventListener("click", ()=> {
    main.innerHTML = ""
    getBooks(API_URL)

})

const book = document.querySelector('.book')
const formCont = document.querySelector('.formCont')



//prevent form submission
form.addEventListener('submit', (e) => {
    e.preventDefault()
     
})

function autoComplete(inputTarget, arrTitles ) {

    const autoDiv = document.createElement('div')
    autoDiv.className = "auto"
    inputTarget.addEventListener('input', (e) => {
        clearSuggestions()
        let val = e.target.value
        if(!val ){
            clearSuggestions()
            return false
        }
        
        arrTitles.forEach(title =>{
            if(title[0].substr(0, val.length).toUpperCase() == val.toUpperCase()){
                console.log(title)
                const titleDiv = document.createElement('div')
                titleDiv.className = ("title")
                titleDiv.innerText = title[0]
                autoDiv.append(titleDiv)
                titleDiv.addEventListener('click', () =>{
                    clearSuggestions()
                   
                    fetch(`${ID_URL}${title[1]}`)
                    .then(res => res.json())
                    .then(res => {
                        main.innerHTML = ""
                        showBooks(res)
                        back.style.display = "block"
                        clearSuggestions()

                    })
                    
                })

            }
        }

        )

    })
    formCont.append(autoDiv)
    function clearSuggestions() {
        autoDiv.innerHTML = " "
    }


}



//hideMenu
function hideMenu(){
    const container = document.getElementById('container')
    if(container.className == "off") {
        container.className = "on"
    }else {
        container.className = "off"
    }
}




//get the books

getBooks(API_URL)

async function getBooks(url) {
    await fetch(url)
    .then(res => res.json())
    .then(books => {
        const array = []
        books.items.forEach(book => {
           array.push(showBooks(book))


        }) 
        
        
         
         autoComplete(input, array)
        
        

    
    })

    
}

//show the books

function showBooks(book) {
    let bookTitles 
    // main.innerHTML = ""

   
       const bookDiv = document.createElement('div')
       bookDiv.className ="book"
       const image = document.createElement('img')
       image.src = book.volumeInfo.imageLinks.thumbnail
       image.className = "img"

       bookDiv.addEventListener('dblclick', ()=>{
           alert("Yaaay...on to the next one!!!")
       })
       const title = document.createElement('h3')
       title.innerText = book.volumeInfo.title
       const identifier = document.createElement('h4')
       identifier.innerText = book.volumeInfo.industryIdentifiers[0].identifier
       const textDiv = document.createElement('div')
       textDiv.className = "infoText"
       textDiv.append(title, identifier)
       const pages = document.createElement('span')
       
       if(book.volumeInfo.pageCount) {
        pages.innerText = book.volumeInfo.pageCount
       }
       pages.className = "infospan"
       const synopsisDiv = document.createElement('div')
       const synopsisT = document.createElement('h3')
       synopsisT.innerText = "synopsis"
      const synopsisP = document.createElement('p')
      synopsisP.innerText = book.volumeInfo.description
      synopsisP.className = "text"
      synopsisDiv.className = "synopsis"
      
      const button = document.createElement('button')
      button.className = 'add'
      button.innerText = "To read"
      button.addEventListener('click', ()=>{
          button.innerText = "Read"
      })
    
      synopsisDiv.append(synopsisT, synopsisP, button)
       bookDiv.append(image, textDiv, pages, synopsisDiv)
       main.append(bookDiv)
       bookTitles = (book.volumeInfo.title)
       let id = book.id
        // const {title, author, pages, description, image, message} = book
        
        // const bookEl = document.createElement('div')
        // bookEl.classList.add('book')

    
       
     
        

       
    //    bookEl.addEventListener("dblclick", function(){
    //        alert("Yaaay...you're acing it. Let's get lost in another one!")
    //    })
    

return [bookTitles, id]
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






