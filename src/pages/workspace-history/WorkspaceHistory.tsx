import { useEffect } from 'react';
import { NavLink, RouteComponentProps, useParams } from 'react-router-dom';

type TParams = {id: string};
// :any per non tipizzare
// React.FC per non tipizzare / Per usare id dobbiamo tipizzare e quindi usiamo typescript definendo TParams

export const WorkSpaceHistory: React.FC<RouteComponentProps<TParams>> = (props) => {

    function getTitle() {
        return 'Workspace History'
    }

    // Hook destrutturato
    const { id } = useParams<TParams>()

    // Con array vuoto la funzione viene chiamata una sola volta
    useEffect(() => {
        console.log('api rest', id);
    }, [id]) // Nell'array delle dipendenze posso passare delle proprietà, quando si aggiornano viene chiamata la funzione

    // export function WorkSpaceHistory(props: any) {
    // Per NON renderizzare un div basta inserire <> un tag vuoto "Fragment"
    return <div>
        <h1> {getTitle()} </h1>
        <br />
        <NavLink to="/workspaces">Back</NavLink>
    </div>
}