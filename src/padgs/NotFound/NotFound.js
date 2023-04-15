import './NotFound.scss';
import {Banner} from '../../components/Banner/Banner';
import {NavLink} from 'react-router-dom';

export function NotFound() {
  return (
    <>
    <div className="NotFound">
    
        <Banner 
        title="404"
        p="page Not Found"
        button={<NavLink to="/">return home</NavLink>}
        />
    
    </div>
    </>
  )
}