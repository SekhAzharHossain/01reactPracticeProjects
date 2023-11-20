import styles from './Display.module.css'

const Display=({displayResult})=>{
    return(
        <input className={`${styles['input']}`} type="text" readOnly value={displayResult}></input>
    )
}

export default Display;