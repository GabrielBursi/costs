import style from "./styles/Home.module.css"

import savings from "../img/savings.svg"; 

import LinkButton from "../components/layout/LinkButton";

function Home() {
    return (
        <section className={style.home_container}>
            <h1>
                Bem-vindo ao <span>Costs</span>
            </h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar projeto"/>
            <img src={savings} alt="Savings" />
        </section>
    );
}

export default Home;