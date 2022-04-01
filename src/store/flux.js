/* eslint-disable */
/* eslint-disable no-console */
const getState = ({ getStore, getActions, setStore }) => ({
  store: {
    swPeople: [],
    swPlanets: [],
    swVehicles: [],
    favoritesList: [],

  },
  actions: {
    getPlanets: () => {
      fetch('https://swapi.dev/api/planets/')
        .then((r) => r.json())
        .then((data) => setStore({ swPlanets: data.results }))
        .catch((error) => console.log(error));
    },

    getPeople: () => {
      fetch('https://swapi.dev/api/people/')
        .then((r) => r.json())
        .then((data) => setStore({ swPeople: data.results }))
        .catch((error) => console.log(error));
    },

    getVehicles: () => {
      fetch('https://swapi.dev/api/vehicles/')
        .then((r) => r.json())
        .then((data) => setStore({ swVehicles: data.results }))
        .catch((error) => console.log(error));
    },
    addFavorites: (favElement) => {
      const store = getStore();
      setStore({ favoritesList: store.favoritesList.concat({ "name": favElement.name,  }) });
    },

    deleteFavorite: (favElement)=>{
      const store = getStore();
      const newFav = store.favoritesList.filter(element=> element.name !== favElement.name)
      setStore({favoritesList:newFav });
      
    }



  },
});

export default getState;
