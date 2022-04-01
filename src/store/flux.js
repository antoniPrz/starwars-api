/* eslint-disable */
/* eslint-disable no-console */
const getState = ({ getStore, getActions, setStore }) => ({
  store: {
    starWarsPeople: [],
    starWarsPlanets: [],
    starWarsVehicles: [],
    favoritesList: [],

  },
  actions: {
    getPlanets: () => {
      fetch('https://swapi.dev/api/planets/')
        .then((r) => r.json())
        .then((data) => setStore({ starWarsPlanets: data.results }))
        .catch((error) => console.log(error));
    },

    getPeople: () => {
      fetch('https://swapi.dev/api/people/')
        .then((r) => r.json())
        .then((data) => setStore({ starWarsPeople: data.results }))
        .catch((error) => console.log(error));
    },

    getVehicles: () => {
      fetch('https://swapi.dev/api/vehicles/')
        .then((r) => r.json())
        .then((data) => setStore({ starWarsVehicles: data.results }))
        .catch((error) => console.log(error));
    },
    addFavorite: (favElement) => {
      const store = getStore();
      setStore({ favoritesList: store.favoritesList.concat({ "name": favElement.name,  }) });
    },

    removeFavorite: (favElement)=>{
      const store = getStore();
      const newFav = store.favoritesList.filter(element=> element.name !== favElement.name)
      setStore({favoritesList:newFav });
      
    }



  },
});

export default getState;
