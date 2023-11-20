import styles from './CalcButtons.module.css'

const CalcButtons=({handleOnClick})=>{

    const buttonNames=['1','2','3','+','4','5','6','-','7','8','9','x','0','clr','=','/'];

    return(
        <div className={`${styles['buttons']}`}>
            {buttonNames.map(buttonNames=>
                <button 
                    key={buttonNames} 
                    onClick={(event)=>{handleOnClick(event)}}
                >
                    {buttonNames}
                </button>
            )}

        </div>
    );
};

export default CalcButtons;