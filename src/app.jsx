"use strict";

import React from 'react';
import Router from 'react-router';
import { TopicContainer } from './components/topic-container.jsx';

const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;

const routes = (
	<Route>
		<DefaultRoute handler={ TopicContainer } />
	</Route>
);

Router.run(routes, function (Handler) {

	React.render(<Handler />, document.body);
});