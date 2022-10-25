import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import style from "./styles/ProjectForm.module.css";

function ProjectForm() {
    return (
        <form className={style.form}>
            <Input 
                type="text" 
                text="Nome do projeto" 
                name="name" 
                placeholder="Insira o nome do projeto"
            />
            <Input 
                type="number" 
                text="Orçamento do projeto" 
                name="budget" 
                placeholder="Insira o orçamento total"
            />
            <Select name="category_id" text="Selecione uma categoria"/>
            <SubmitButton text="Criar projeto"/>
        </form>
    );
}

export default ProjectForm;