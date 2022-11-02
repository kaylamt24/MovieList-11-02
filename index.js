console.log('hello world')



// const movie = document.createElement("")



// const movie = document.createElement('li')
// const movieTitle = document.createElement('span')
// movieTitle.textContent = inputField
// movie.appendChild(movieTitle)







const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)


    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "x"
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteMovie)


    let list = document.querySelector('ul')
    list.appendChild(movie)
}


const deleteMovie = (event) => {
    event.target.parentNode.remove()
}


const crossOffMovie = (event) => {
    event.target.classList.toggle("checked")
    let deleteMovie= document.createElement("span")
    deleteMovie.textContent = checked.value
}

document.querySelector('form').addEventListener('submit', addMovie)
// deleteBtn.addEventListener('click', deleteMovie)

// let formEl = document.querySelector('form')
// formEl.addEventListener('submit', (event) =>{
//     addMovie(event)
// })






// GRAN THE HTML ELEMENT
// WRITE OUR FUNCTION
// COMBINE ONE AND TWO USING AN EVENT LISTENER

/* CREATE A NEW FUNCTION CALLED ADD MOVIE THAT TAKES IN AN EVENT AS A PARAMETER
        Const addMovie = (event) => {

        }

    USE QUERYSELECTOR TO GET THE INPUT AND SAVE IT TO A VARIABLE CALLED INPUT FIELD 
        const inputField = document.querySelector('#addMovie')

    CREATE A NEW VARIABLE CALLED MOVIE AND STORE AN LI ELEMENT IN IT USING DOC CREATE ELEM. 
        
    CREATE A SPAN ELEMENT <SPAN></SPAN> AND SET TO MOVIE TITLE. 

    ul is inside of the main

*/