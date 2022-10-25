import ProjectForm from "../components/project/ProjectForm";
import style from "./styles/NovoProjeto.module.css"

function NovoProjeto() {
    return (
        <div className={style.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm/>
        </div>
    );
}

export default NovoProjeto;