import { NavLink } from 'react-router-dom';

export const WorkSpaces = () => {
    return <div>
        <h1>Workspaces List</h1>
        <br/>
        <NavLink to="/workspaces/1">1</NavLink>
        <br/>
        <NavLink to="/workspaces/2">2</NavLink>
        <br/>
        <NavLink to="/workspaces/3">3</NavLink>
    </div>
}