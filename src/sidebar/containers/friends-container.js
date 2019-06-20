import React, {Component} from 'react'
import Friends from '../components/friends';

class FriendsContainer extends Component {
    state = {
        data: null
    }

    fetchData() {
        fetch("https://randomuser.me/api/?results=5")
        .then(response => response.json())
        .then(data=> {
            this.setState({data: data})
            
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        if(this.state.data == null)
            return <h1 style={{color: "white"}}>Cargando...</h1>

        return <Friends data={this.state.data.results} />
    }
}

export default FriendsContainer