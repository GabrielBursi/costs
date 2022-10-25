import style from "./styles/Select.module.css"

function Select({text, name, options, value, handleOnChange}) {
    return (
        <div className={style.form_control}>
            <label htmlFor={name} >{text}:</label>
            <select name={name} id={name}>
                <option>Opção</option>
            </select>
        </div>
    );
}

export default Select;