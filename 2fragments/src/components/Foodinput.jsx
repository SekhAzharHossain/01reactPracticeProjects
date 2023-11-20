import styles from './Foodinput.module.css'

const Foodinput=({handleOnKeyDown})=>{
    return <input type="text" placeholder="Enter Food Item here"
    className={styles.Foodinput}
    onKeyDown={handleOnKeyDown}
    />
};

export default Foodinput;