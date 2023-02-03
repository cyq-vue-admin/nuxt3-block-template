import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {

    state: () => {
        return {
            count: 0,
        }
    },
    persist: true,
})
