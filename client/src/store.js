import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(persist((set,get) => ({
    currentId: '',
    currentEmail:'',
    currentName:'',
    setCurrentName: (currentName) => set({ currentName }),
    setCurrentEmail: (currentEmail) => set({ currentEmail }),
    setCurrentId: (currentId) => set({ currentId })
      
}),
{
    name: "user-storage", // unique name
    getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
  }
))
