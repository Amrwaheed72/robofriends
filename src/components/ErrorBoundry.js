import React, { Component } from 'react'

class Errorboundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooooooops. That is not Good</h1>
        }
        return this.props.children
    }
}
export default Errorboundry;