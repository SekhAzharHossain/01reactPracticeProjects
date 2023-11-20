import styles from'./Items.module.css'



const Items=({Items,bought,handleBuyButtonClicked})=>{
    return(
        <li className={`${styles['kg-items']} list-group-item ${bought && "active" }`}>
            <span className='kg-span'>{Items}</span>
            <button className={`${styles['button']} btn btn-light`}
            onClick={handleBuyButtonClicked}
            >Buy</button>
        </li>
    )
};

export default Items;
