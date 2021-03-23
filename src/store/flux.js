const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            swPeople: ['assasas','eer','ererwr','vcvxcbv'],
			swPlanets: [],
			swVehicles: [],
		},
		actions: {
			 getPlanets : () => {
                fetch("https://swapi.dev/api/planets/")
                .then(r => r.json())
                .then(data => setStore({swPlanets:data.results}))
                .catch(error => console.log(error))

             }
		}
	};
};

export default getState;


