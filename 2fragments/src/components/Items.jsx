import styles from'./Items.module.css'

const Items=({Items})=>{
    return(
        <li className={`${styles['kg-items']} list-group-item`}>
            <span className='kg-span'>{Items}</span>
            <span><link rel="stylesheet" href="https://www.youtube.com/watch?v=-ueKEIUeMTA" /></span>
        </li>
    )
};

export default Items;
