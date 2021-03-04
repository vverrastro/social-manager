import React from 'react';

import { CreatePost } from './pages/create-post/CreatePost';
import { WorkSpaces } from './pages/workspaces/Workspace';
import { WorkSpaceAdd } from './pages/workspace-add/WorkSpaceAdd';
import { WorkSpaceHistory } from './pages/workspace-history/WorkspaceHistory';

import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // BrowserRouter: definiamo le rotte del nostro sito
    // Creiamo dei componenti che rappresentano le nostre pagine

    // Switch: renderizza solo il componente specifico
	// Exact: fa un match esatto della rotta
    <BrowserRouter>
        <Switch>
			<Route path="/workspaces" exact>
				<WorkSpaces />
			</Route>
			<Route path="/workspaces/:id" component={WorkSpaceHistory} />
			<Route path="/add-workspace" component={WorkSpaceAdd} />
			<Route path="/create-post" component={CreatePost} />
			<Route path="*">
				<Redirect to="workspaces"/>
			</Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;