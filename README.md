# phase-1-booktracker-project
  
The application is a book tracker that uses a public API (Google Books) containing 10 books, each with a couple of properties. The book tracker makes use of two endpoints:
i) https://www.googleapis.com/books/v1/volumes?q=inauthor:patterson&key=AIzaSyCgmtkpLHreksPZH0AKIyutF6ovgEbadKI
ii) https://www.googleapis.com/books/v1/volumes/


The core features of this MVP include:
i)A search bar: The user is able to search for any of the 10 books using their titles and the suggestions automatically appear below the search bar. The user is able to view a single book based on the suggestion clicked.
ii)A dark/light mode toggle button: Right next to the search bar is a user icon, which when clicked displays a menu. Inside the menu is a distinct button with the inner text "Dark Mode". Once the user clicks this button, the application switches to dark mode and vice-versa. The user can then click the icon to stop displaying the menu.
iii)A "To Read" button: Once the user hovers over any of the books in the main section, the synopsis appears together with a button right below it. The user can click on this button if the book has already been read. The button's inner text will then switch to "Read".

The 4 event listeners used include:
i)Submit: Prevents the default behaviour of form submit.
ii)Click :All the buttons and the 2 icons(user and back) located in the header make use of the click event listener.
iii)Input: This event listener is used when typing a book title in the search bar.
iv)Double click: Once any book is double-cliked, an alert with a message for the user appears on the screen.
