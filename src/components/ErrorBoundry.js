import React, { Component } from 'react';

class ErrorBoundry extends Component {
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
            return <h1 className="tc">Oooops. Something went wrong. Try refreshing the page.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;