const myLibrary = [];
const displayCard = document.getElementById("displayer");
const submiter = document.getElementById("bookForm");
const form = document.getElementById("form");
const showForm = document.getElementById("show-form");
const closeForm = document.getElementById("close-form");
showForm.addEventListener("click", () => {
  form.showModal();
});

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
      const readStatus = this.read ? "already read" : "notread yet";
      return `${this.title}  by ${this.pages} + ${readStatus}
      `;
    };
  }
}
function addBookToLibrary(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const yes = document.getElementById("read").checked;

  if (yes) {
    read = "already read";
  } else {
    read = "havent read yet";
  }

  const newBooke = new Book(title, author, pages, read);
  myLibrary.push(newBooke);
  displayInfo();
  form.close();
}

function displayInfo() {
  displayCard.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.style.marginBottom = "10px";
    bookDiv.classList.add("book-info");

    for (const ke in book) {
      if (book.hasOwnProperty(ke) && ke !== "info") {
        const p = document.createElement("p");

        p.textContent = `${ke}: ${book[ke]}`;

        bookDiv.appendChild(p);
      }
    }

    const removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.setAttribute("data-index", index);
    removeButton.classList.add("remove-btn");

    removeButton.addEventListener("click", removeBook);
    bookDiv.appendChild(removeButton);
    displayCard.appendChild(bookDiv);
  });
}

function removeBook(event) {
  const index = event.target.getAttribute("data-index");
  myLibrary.splice(index, 1);
  displayInfo();
}

submiter.addEventListener("submit", addBookToLibrary);
closeForm.addEventListener("click", () => {
  form.close();
});
