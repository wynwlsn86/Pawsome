import React, { Component } from 'react';
import { getAllPets } from '../../services/petsApi';

class AllPets extends Component {
    constructor () {
        super();
        this.state = {
            allPets: []
        }
    }



    fetchAllPets = async () => {
       const allPets =  await getAllPets();
        console.log(allPets);
        this.setState({allPets});
    }

//     fetchRestaurantsData = async () => {
//         const restaurants = await fetchRestaurants();
//         this.setState({
//           restaurants
//         })
//         console.log('this is data', restaurants);
//    }




    componentDidMount() {
        this.fetchAllPets();
    }
    


    render() {
        return (
            <div>
                <h1>test</h1>
            </div>
        );
    }
}

export default AllPets;