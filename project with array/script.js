const input = document.getElementById("info")
const addBtn = document.getElementById("addBtn")
const film = document.getElementById("film")

const movies = []

addBtn.addEventListener("click", () =>{
    let movieItem = input.value
    movies.push(movieItem)
    console.log(movies)
    
    const li = document.createElement("li")
    const btnDel = document.createElement("button") 
    
    li.textContent = movieItem
    btnDel.textContent = "Удалить"
    
    film.appendChild(li)
    li.appendChild(btnDel)
    
    input.value = ""
    
    btnDel.addEventListener("click", () => {
        const index = movies.indexOf(movieItem)
        if(index !== -1){
            movies.splice(index, 1)
        }
        
        li.remove()
        console.log(movies)
    })
})