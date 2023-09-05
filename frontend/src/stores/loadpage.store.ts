import { create } from "zustand";

interface LoadPageStore{
    contents_number : any;
    setContents_number : (contents_number : any) => void;
    removeContents_number : () => void;
}

const loadPageStore  = create<LoadPageStore>((set) => ({
    contents_number : null,
    setContents_number : (contents_number : any) =>{
        set((state) => ({ ...state, contents_number}));
    },
    removeContents_number: () => {
        set((state) => ({...state, contents_number : null}));
    }

}))

export default loadPageStore;