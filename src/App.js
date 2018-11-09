import './styling/App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/loginPage/LoginPage';
<<<<<<< HEAD
 import RegistrationPage from './components/registrationPage/RegistrationPage';
import NavBar from './components/navBar/NavBar'
=======
import RegistrationPage from './components/registrationPage/RegistrationPage';
import NavBar from './components/navBar/NavBar';
>>>>>>> 764add3ca7244127cf30a13370b5e33166089223
import ResultsListContainer from './components/resultsPage/ResultsListContainer';
import homePage from './components/homePage/HomePage';
import ProfilePageContainer from './components/profilePage/ProfilePageContainer';
import MessageListContainer from './components/messagePage/MessageListContainer';


class App extends Component {
	render() {
		return (
			<div>
				<nav>
					<NavBar />
				</nav>
				<div className="main">
					<Route exact path="/home" component={homePage} />
					<Route exact path="/signup" component={RegistrationPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/results" component={ResultsListContainer} />
					<Route exact path="/profiles/:id" component={ProfilePageContainer} />
					<Route exact path="/messages" component={MessageListContainer} />
				</div>
			</div>
		);
	}
}

export default App;
