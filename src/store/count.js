import { create } from "zustand";

const counter = create((set) => ({
    number:0,
    incrementNumber: () => {
        set((num) => ({number: num.number += 1}))
    },
    decrementNumber: () => {
        set((num) => ({
            number: num.number -= 1
        }))
    }
}))

export default counter