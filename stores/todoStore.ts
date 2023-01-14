import { defineStore } from "pinia";
import { v4 as uuid } from 'uuid'
export interface todoInterface {
    id?: string
    text: string,
    completed: boolean
}

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todos: [
            {
                id: uuid(),
                text: 'Example todo',
                completed: false
            }
        ] as todoInterface[],
        isLoad: false
    }),
    actions: {
        addTodo(item: todoInterface) {
            item.id = uuid()
            this.todos.push(item)
        },
        saveToLocalStorage() {
            localStorage.setItem('todos', JSON.stringify(this.todos))
        },
        clearLocalStorage() {
            this.isLoad = false
            localStorage.removeItem('todos')
        },
        loadFromLocalStorage() {
            // this.todos = JSON.parse(localStorage.getItem('todos'))
        },
        checkInLocalStorage() {
            if (typeof window !== 'undefined') {
                this.isLoad = !(localStorage.getItem('todos') === null)
            }
        }
    },
    getters: {

    }
})
