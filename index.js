const container = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    status: "In Library",
    location: "Shelf 4A",
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    status: "On Loan",
    returnDate: "2026-06-01",
  },
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
    status: "In Library",
    location: "Shelf 2C",
  },
  {
    id: "4",
    title: "Tender Is the Night",
    author: "F. Scott Fitzgerald",
    status: "In Library",
    location: "Shelf 4A",
  },
];
const inputElement = document.getElementById("bookInput");
const resultsDiv = document.getElementById("searchResultsContainer");

function searchBook() {
  resultsDiv.innerHTML = "";

  if (inputElement === "") {
    alert("please enter book");
  } else if (inputElement.value === container.id) {
    container.forEach((database) => {
      const bookCardHTML = `
          <h3>ID: ${database.id}</h3>
          <p><strong>Title:</strong> ${database.title}</p>
          <p><strong>Author:</strong> ${database.author}</p>
          <p><strong>Status:</strong> ${database.status}</p>
          <p><strong>Location:</strong> ${database.location}</p>
        </div>
      `;
      resultsDiv.innerHTML = bookCardHTML;
    });
  }
}
