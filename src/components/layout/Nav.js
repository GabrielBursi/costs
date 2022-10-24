import {Link } from 'react-router-dom'

import Container from './Container';

import Logo from "../../img/costs_logo.png"

import style from "./styles/Navbar.module.css";

function Nav() {
    return (
        <nav className={style.navbar}>
            <Container>
            <Link to="/">
                <img src={Logo} alt="costs"></img>
            </Link>
            <ul className={style.list}>
                <li className={style.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={style.item}>
                    <Link to="/projetos">Projetos</Link>
                </li>
                <li className={style.item}>
                    <Link to="/empresa">Empresa</Link>
                </li>
                <li className={style.item}>
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>
            </Container>
        </nav>
    );
}

export default Nav