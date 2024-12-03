import { create } from 'zustand';



interface Store {

    session_uid_store: string | null
    email: string | null
    bank_uid_store: string | null

    setEmeil: (b: string) => void
    setSession: (b: string) => void
    setBank: (b: string) => void

}

export const useStore = create<Store>()((set) => ({

    session_uid_store: null,
    email: null,
    bank_uid_store: null,

    setEmeil: (b) => set(() => ({ email: b })),
    setSession: (b) => set(() => ({ session_uid_store: b })),
    setBank: (b) => set(() => ({ bank_uid_store: b }))

}))

