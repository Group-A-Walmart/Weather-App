const initialState = ['Make Bed', 'Wash Dishes'];

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'todos/addTodo':
            return [...state, action.payload]
    }
}

const addTodo = {
    type: "todos/addTodo",
    payload: "Vacuum"
}