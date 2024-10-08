import { Component } from "react"
import CardList from "../components/CardList";
// import robots from "../robots";
import SearchBox from "../components/searchBox";
import Errorboundry from "../components/ErrorBoundry";
import Scroll from '../components/scroll';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }
    onSeachChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const { robots, searchfield } = this.state;
        const filterrobots = robots.filter(robots => {
            return robots.name.toLowerCase()
                .includes(searchfield.toLowerCase())
        })



        return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSeachChange} />
                    <Scroll>
                        <Errorboundry>
                            <CardList robots={filterrobots} />
                        </Errorboundry>
                    </Scroll>
                </div>
            )
    }
}
export default App