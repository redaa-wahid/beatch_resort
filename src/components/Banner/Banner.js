import './Banner.scss';
import {Buttons} from '../Buttons/Buttons';
import {NavLink} from 'react-router-dom';

export const Banner = (props) => {
  return (
    <>
<div className="banner">
<div className="info">
<h1>{props.title}</h1>
<p>{props.p}</p>

<NavLink to={"/"?"/rooms":"/"}>
<Buttons btn={props.button}/>
</NavLink>
</div>
</div>
    </>
  )
}