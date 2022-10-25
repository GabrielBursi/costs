import style from "./styles/Input.module.css"

function Input({type, text, name, placeholder, value, handleOnChange}) {
    return (
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                onChange={handleOnChange} 
                value={value}>
            </input>
        </div>
    );

}

export default Input;