import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExerciseList extends Component{
    constructor(props){
        super(props);
        
        this.deleteExercises = this.deleteExercises.bind(this);
        this.state = {exercises: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({ exercises: response.data});
            })
            .catch(err => {
                console.log(err);
            });
    }

    deleteExercises(id) {
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(res => console.log(res.data));
            this.setState({
                
            });
    }

    render(){
        return(
            <div>
                <p>Exercise list Component</p>
            </div>
        );
    }
}