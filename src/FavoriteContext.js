import { createContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({children}){
    const [items, setItems] = useState([]);

    const addToFavorite = (title, year) => {
        setItems((prevState) => [...prevState, {title, year}]);
    }
    return(
        <FavoriteContext.Provider value={{items, addToFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContext;