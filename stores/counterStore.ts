import { defineStore } from 'pinia'

export interface counterInterface {
    count: number
}

export const useCounterStore = defineStore('counterStore', {
    state: (): counterInterface => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++
        },
        increment2x() {
            this.count *= 2
        },
        decrement() {
            this.count--
        },
        reset() {
            this.count = 0
        },
    },
})
