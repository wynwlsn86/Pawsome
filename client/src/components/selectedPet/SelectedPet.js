import React, { Component } from 'react';
import noCatImage from '../../assets/noCatImage.jpeg';

class SelectedPet extends Component {
    constructor(props){
        super(props);
        this.state={
            grabbedPet: '',
            petImage: '',
            petDesc: '',
            pets: this.props.allPets
        }
    }


handleSubmit = () => {
    console.log(this.props.allPets)
}

componentDidMount(){
    this.handleSubmit()
}


    render() {
        return (
            <div>
                <div>
                    <h1>SELECT A PET</h1>
                    <img src={noCatImage} alt='' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        );
    }
}

export default SelectedPet;
