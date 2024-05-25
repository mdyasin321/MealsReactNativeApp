import React, {createContext, useState} from 'react';

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: id => {},
  removeFavourite: id => {},
});

const FavouritesContextProvider = ({children}) => {
  const [favouriteIds, setFavouriteIds] = useState([]);

  const addFavouriteHandler = id => {
    setFavouriteIds(prevState => {
      return [...prevState, id];
    });
  };

  const deleteFavouriteHandler = id => {
    // setFavouriteIds(prevState => {
    //   const movieList = prevState.filter(mealId => {
    //     return mealId !== id;
    //   });
    //   return movieList;
    // });

    //OR
      //Recommended
      const favouriteMealIds = favouriteIds.filter(mealId => {
        return mealId !== id;
      });

      setFavouriteIds(favouriteMealIds);
                
                //OR
    // setFavouriteIds((prevState)=>{
    //     return prevState.filter((mealId)=>{
    //         return mealId!==id
    //     })
    // })
    
  };

  const valueToPass = {
    ids: favouriteIds,
    addFavourite: addFavouriteHandler,
    removeFavourite: deleteFavouriteHandler,
  };

  return <FavouritesContext.Provider value={valueToPass}>{children}</FavouritesContext.Provider>;
};

export default FavouritesContextProvider;
