import { defineStore } from 'pinia'
export const useHeaderSotre = defineStore('header', {
    state: () => ({
        subMenu: false
    }),
    actions: {
        view_submenu(bool) {
            this.subMenu = bool;
        }
    }

});