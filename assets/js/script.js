let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let localTodos = JSON.parse(localStorage.getItem('todos'))
let todosEl = document.querySelector('.todos')

if (localTodos) {
        localTodos.forEach(todo => appendTodo(todo.text, todo.checked))
}

btn.addEventListener('click', () => {
        if (input.value == '') {
                return
        } else {
                appendTodo(input.value)
                input.value = ''
        }
})

function appendTodo(value, value2) {
        let todoEl = document.createElement('li')
        todoEl.classList.add('todo')

        if (value2) {
                todoEl.classList.add('checked')
        }

        todoEl.innerText = value
        todoEl.addEventListener('click', () => {
                todoEl.classList.toggle('checked')
                updateLocalStorage()
        })
        todoEl.addEventListener('contextmenu', (e) => {
                e.preventDefault()
                todoEl.remove()
                updateLocalStorage()
        })

        todosEl.append(todoEl)

        updateLocalStorage()
}

function updateLocalStorage() {
        let todoEls = document.querySelectorAll('li')

        let todos = []

        todoEls.forEach(todo => {
                todos.push({
                        text: todo.innerHTML,
                        checked: todo.classList.contains('checked')
                })
        })

        localStorage.setItem('todos', JSON.stringify(todos))
}