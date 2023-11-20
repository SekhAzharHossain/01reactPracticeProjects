import CalcButtons from './CalcButtons';
import styles from './Calculator.module.css'
import Display from './Display';



const Calculator=({handleOnClick,displayResult})=>{
    return(
        <div className={`${styles['center']}`}>
            <div className={`${styles['calculator']}`}>
                <Display displayResult={displayResult}/>
                <CalcButtons handleOnClick={handleOnClick}/>
            </div>
        </div>
    );
};

export default Calculator;