import React, { Component } from 'react'


const ErrorDisplay = ({message}) => {
    return (
        <div>
            <p>Whoops!</p>
            <p>{message}</p>
        </div>
    )
}

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false , errorMsg: 'hi' };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
        console.log(error)
        
		return { hasError: true };
	}

	componentDidCatch(error, info) {
        // console.log(error);
        if (error) {
			this.setState({errorMsg: error.message})
		}
        // return { hasError: true };
		// Example "componentStack":
		//   in ComponentThatThrows (created by App)
		//   in ErrorBoundary (created by App)
		//   in div (created by App)
		//   in App
		// logErrorToMyService(error, info.componentStack);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <ErrorDisplay message={this.state.errorMsg} />
		}

		return this.props.children;
	}
}

