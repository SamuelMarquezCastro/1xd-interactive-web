document.addEventListener("DOMContentLoaded", function () {
     const btnSave = document.getElementById("btn1");
     const btnLoad = document.getElementById("btn2");
     const btnRemove = document.getElementById("btn3");
     const btnAddMovie = document.getElementById("btn4");
     const spanMyName = document.getElementById("myName");
     const inputMovie = document.getElementById("movie");
     const movieList = document.getElementById("movieList");
 
     // 1 - Save name to localStorage
     btnSave.addEventListener("click", function () {
         const name = prompt("Enter your name:");
         if (name) {
             localStorage.setItem("myName", name);
             alert("Name saved!");
         }
     });
 
     // 2 - Load name from localStorage
     btnLoad.addEventListener("click", function () {
         const name = localStorage.getItem("myName");
         spanMyName.textContent = name ? name : "No name found";
     });
 
     // 3 - Remove name from localStorage
     btnRemove.addEventListener("click", function () {
         localStorage.removeItem("myName");
         spanMyName.textContent = "...";
         alert("Name removed!");
     });
 
     // Function to display movies from localStorage
     function displayMovies() {
         movieList.innerHTML = ""; // Clear existing list
         const movies = JSON.parse(localStorage.getItem("movies")) || [];
         movies.forEach(movie => {
             const li = document.createElement("li");
             li.textContent = movie;
             movieList.appendChild(li);
         });
     }
 
     // 4 - Add movie to localStorage
     btnAddMovie.addEventListener("click", function () {
         const movie = inputMovie.value.trim();
         if (movie) {
             const movies = JSON.parse(localStorage.getItem("movies")) || [];
             movies.push(movie);
             localStorage.setItem("movies", JSON.stringify(movies));
             inputMovie.value = ""; // Clear input field
             displayMovies();
         }
     });
 
     // Load movies on page load
     displayMovies();
 });
 