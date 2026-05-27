const libraryBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    publisher: "George Allen & Unwin",
    genre: "Fantasy",
    pages: 310,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    publisher: "Secker & Warburg",
    genre: "Dystopian Fiction",
    pages: 328,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    publisher: "J.B. Lippincott & Co.",
    genre: "Southern Gothic",
    pages: 281,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    publisher: "Charles Scribner's Sons",
    genre: "Tragedy",
    pages: 180,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    year: 1851,
    publisher: "Richard Bentley",
    genre: "Adventure Fiction",
    pages: 635,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    publisher: "T. Egerton",
    genre: "Romantic Novel",
    pages: 279,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    publisher: "Little, Brown and Company",
    genre: "Coming-of-age",
    pages: 214,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    publisher: "HarperTorch",
    genre: "Quest Fantasy",
    pages: 208,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    publisher: "Bloomsbury",
    genre: "Fantasy",
    pages: 309,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2003,
    publisher: "Doubleday",
    genre: "Mystery Thriller",
    pages: 689,
  },
];

// ============================================
//  BLOCK 2: GET DOM ELEMENTS (once, outside event)
// ============================================
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsDiv = document.getElementById("resultsContainer");
const resultsContainerByGenre = document.getElementById(
  "resultsContainerByGenre",
);
const searchInputByGenre = document.getElementById("searchInputByGenre");
const searchByGenre = document.getElementById("searchByGenre");
const searchInputByPages = document.getElementById("searchInputByPages");
const searchBtnByPages = document.getElementById("searchBtnByPages");
const resultsContainerByPages = document.getElementById(
  "resultsContainerByPages",
);
// ============================================
//  BLOCK 3: ONE FUNCTION THAT DOES EVERYTHING
//  (search + display)
// ============================================

function handleSearch() {
  // 1. get & clean the search term
  const query = searchInputByGenre.value.trim().toLowerCase();
  // 2. if empty -> show a gentle warning
  if (query === "") {
    resultsDiv.innerHTML = `<div class="not-found" style="background:#f1f3f8;">🔍 Please type a book title first.</div>`;
    return;
  }
  // 3. search for the book (loop through array)
  let foundBook = null;
  for (let i = 0; i < libraryBooks.length; i++) {
    const book = libraryBooks[i];
    if (book.title.toLowerCase().includes(query)) {
      foundBook = book;
      break; // stop at first match
    }
  }
  // 4. display result (book details OR not found)
  if (foundBook !== null) {
    // show book card
    resultsDiv.innerHTML = `
      <div class="book-card">
        <h2>📘 ${foundBook.title}</h2>
        <div class="details-grid">
          <div class="detail-item"><strong>✍️ Author:</strong> ${foundBook.author}</div>
          <div class="detail-item"><strong>📅 Year:</strong> ${foundBook.year}</div>
          <div class="detail-item"><strong>🏢 Publisher:</strong> ${foundBook.publisher}</div>
          <div class="detail-item"><strong>🎭 Genre:</strong> ${foundBook.genre}</div>
          <div class="detail-item"><strong>📄 Pages:</strong> ${foundBook.pages}</div>
        </div>
      </div>
    `;
  } else {
    resultsDiv.innerHTML = `
      <div class="not-found">
        ❌ No book found containing "<strong>${searchInput.value.trim()}</strong>".<br>
        💡 Try: "Hobbit", "1984", "Alchemist", "Harry"
      </div>
    `;
  }
}
// ============================================
//  BLOCK 4: ATTACH EVENT LISTENERS (only 2 lines)
// ============================================
searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleSearch();
  }
});

// ============================================
//  BLOCK 5: ONE FUNCTION THAT DOES EVERYTHING
//  (search + display)
// ============================================

function handleSearchByGenre() {
  // 1. Get and clean the search term
  const query = searchInputByGenre.value.trim().toLowerCase();

  // 2. If empty -> show a warning
  if (query === "") {
    resultsContainerByGenre.innerHTML = `<div class="not-found" style="background:#f1f3f8;">🔍 Please type a book genre first.</div>`;
    return;
  }

  // 3. Create a blank container string to hold our matching book cards HTML
  let htmlResults = "";

  // 4. Loop through every single book in the library array
  for (let i = 0; i < libraryBooks.length; i++) {
    const book = libraryBooks[i];

    // Check if the current book's genre contains the search text
    if (book.genre.toLowerCase().includes(query)) {
      // Found a match! Build the HTML template and append (+=) it to our string
      htmlResults += `
        <div class="book-card" style="margin-bottom: 15px;"> 
          <h2>📘 ${book.title}</h2> 
          <div class="details-grid"> 
            <div class="detail-item"><strong>✍️ Author:</strong> ${book.author}</div> 
            <div class="detail-item"><strong>📅 Year:</strong> ${book.year}</div> 
            <div class="detail-item"><strong>🏢 Publisher:</strong> ${book.publisher}</div> 
            <div class="detail-item"><strong>🎭 Genre:</strong> ${book.genre}</div> 
            <div class="detail-item"><strong>📄 Pages:</strong> ${book.pages}</div> 
          </div> 
        </div>
      `;

      // Note: We removed "break;" so the loop keeps checking the rest of the books!
    }
  }

  // 5. Display the final results on your page
  if (htmlResults !== "") {
    // If our string is NOT empty, it means we found matches! Inject the HTML.
    resultsContainerByGenre.innerHTML = htmlResults;
  } else {
    // If the string is still empty, no books matched the search.
    resultsContainerByGenre.innerHTML = ` 
      <div class="not-found"> 
        ❌ No books found containing "<strong>${searchInputByGenre.value.trim()}</strong>".<br> 
        💡 Try: "Southern Gothic", "Tragedy", "Adventure Fiction" 
      </div> 
    `;
  }
}
// ============================================
//  BLOCK 6: ATTACH EVENT LISTENERS (only 2 lines)
// ============================================
searchByGenre.addEventListener("click", handleSearchByGenre);
searchInputByGenre.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleSearchByGenre();
  }
});

function handleSearchByPages() {
  // 1. Get the search term and convert it to a whole number
  const query = parseInt(searchInputByPages.value.trim(), 10);
  // 2. If the input is empty or not a valid number -> show a warning
  if (isNaN(query)) {
    resultsContainerByPages.innerHTML = `<div class="not-found" style="background:#f1f3f8;">🔍 Please type a valid page number first.</div>`;
    return;
  }
  // 3. Create a blank container string to hold our matching book cards HTML
  let htmlResults = "";

  // 4. Loop through every single book in the library array
  for (let i = 0; i < libraryBooks.length; i++) {
    const book = libraryBooks[i];

    // Check if the current book's page count matches or is less than/equal to the query
    // NOTE: Change "<=" to "===" if you want an exact match instead of a maximum page limit
    if (book.pages <= query) {
      // Found a match! Build the HTML template and append it to our string
      htmlResults += `
        <div class="book-card" style="margin-bottom: 15px;">
          <h2>📘 ${book.title}</h2>
          <div class="details-grid">
            <div class="detail-item"><strong>✍️ Author:</strong> ${book.author}</div>
            <div class="detail-item"><strong>📅 Year:</strong> ${book.year}</div>
            <div class="detail-item"><strong>🏢 Publisher:</strong> ${book.publisher}</div>
            <div class="detail-item"><strong>🎭 Genre:</strong> ${book.genre}</div>
            <div class="detail-item"><strong>📄 Pages:</strong> ${book.pages}</div>
          </div>
        </div>
      `;
    }
    // 5. Display the final results on your page
    if (htmlResults !== "") {
      resultsContainerByPages.innerHTML = htmlResults;
    } else {
      resultsContainerByPages.innerHTML = `
      <div class="not-found">
        ❌ No books found with <strong>${query}</strong> pages or fewer.<br>
        💡 Try searching for a larger number like "300" or "500".
      </div>
    `;
    }
  }
}

// ============================================
//  BLOCK 8: ATTACH EVENT LISTENERS (only 2 lines)
// ============================================
searchBtnByPages.addEventListener("click", handleSearchByPages);
searchInputByPages.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleSearchByPages();
  }
});
