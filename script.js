let demo = document.querySelector(".demo");
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let button = document.querySelector(".button");

function getPoem() {
  fetch("https://poetrydb.org/random")
    .then((response) => response.json())
    .then((poem) => {
      console.log(poem[0].title); // Prints the title of the poem
      console.log(poem[0].author); // Prints the author of the poem
      console.log(poem[0].lines.join("\n")); // Prints the lines of the poem
      demo.innerHTML = poem[0].lines.join("<br>");
      title.innerHTML = poem[0].title;
      author.innerHTML = poem[0].author;
    })
    .catch((error) => console.error("Error:", error));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

getPoem();
button.addEventListener("click", getPoem);
