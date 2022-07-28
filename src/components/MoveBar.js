import Left1 from "./chevron-left.svg"
import Left2 from "./chevron-double-left.svg"
import Left3 from "./chevron-triple-left.svg"
import Right1 from "./chevron-right.svg"
import Right2 from "./chevron-double-right.svg"
import Right3 from "./chevron-triple-right.svg"


const MoveBar = (props) => {
    const { index, limit, moveIndex } = props;
    let left = false;
    if (index === 0) left = true;
    let right = false;
    if (index === limit * 12) right = true;
    let pages = [];
    let count = index / 12 - 2;
    for (let i = 0; i < 5; i++) {
        if (count > -1 && count < limit + 1)
        pages[i] = count + 1;
        else 
        pages[i] = '';
        count ++;
    }
    let keyAux = 0;
    return (
        <div className="move-bar">
            <button onClick={() => {moveIndex(0)}} disabled={left}>1</button>
            <button onClick={() => {
                (index - 600 > -1) ? moveIndex(index - 600) : moveIndex(0)}} disabled={left}>
                <img src={Left3} alt='chevron-triple-left'></img>       
            </button>
            <button onClick={() => {
                (index - 120 > -1) ? moveIndex(index - 120) : moveIndex(0)}} disabled={left}>
                <img src={Left2} alt='chevron-double-left'></img>     
            </button>                
            <button onClick={() => {moveIndex(index - 12)}} className="left" disabled={left}>
                <img src={Left1} alt='chevron-left'></img>  
            </button>
            {pages.map((link) => {
                keyAux++;
                return (
                    <button key={keyAux} onClick={() => {moveIndex((link - 1) * 12)}} disabled={(link === '' || link === index / 12 + 1) ? true : false}>{link}</button>
                )
            })}
            <button onClick={() => {moveIndex(index + 12)}} className="right" disabled={right}>
                <img src={Right1} alt='chevron-right'></img>
            </button>
            <button onClick={() => {
                (index + 120 < limit * 12) ? moveIndex(index + 120) : moveIndex(limit * 12)}} disabled={right}>
                <img src={Right2} alt='chevron-double-right'></img> 
            </button>
            <button onClick={() => {
                (index + 600 < limit * 12) ? moveIndex(index + 600) : moveIndex(limit * 12)}} disabled={right}>
                <img src={Right3} alt='chevron-triple-right'></img>  
            </button>                
            <button onClick={() => {moveIndex(limit * 12)}} disabled={right}>{limit + 1}</button>
        </div>
    );
};

export default MoveBar;