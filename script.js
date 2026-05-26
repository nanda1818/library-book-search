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

// ============================================
//  BLOCK 3: ONE FUNCTION THAT DOES EVERYTHING
//  (search + display)
// ============================================

function handleSearch() {
  // 1. get & clean the search term
  const query = searchInput.value.trim().toLowerCase();
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
