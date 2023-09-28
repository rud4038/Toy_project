import { create } from "zustand";

interface CategoryNumberStore{
    categoryNumber : any;
    setcategoryNumber : (categoryNumber : any) => void;
    removecategoryNumber : () => void;
}

const categoryNumberStore  = create<CategoryNumberStore>((set) => ({
    categoryNumber : 0,
    setcategoryNumber : (categoryNumber : any) =>{
        set((state) => ({ ...state, categoryNumber}));
    },
    removecategoryNumber: () => {
        set((state) => ({...state, categoryNumber : null}));
    }

}))

export default categoryNumberStore;