import "./Body.css";

const Body = ({SetData}) => {

    return (
        <div className="container">
            <div className="inputs pass-length">
                <label ><b>Password Length</b></label>
                <input type="number" onChange={(event)=>SetData({type:"len",value:event.target.value})} className="char-length"></input>
            </div>
            <div className="inputs">
                <label>Add Uppercase Letters</label>
                <input type="checkbox" onChange={(event)=>SetData({type:"upCase",value:event.target.checked})}></input>
            </div>
            <div className="inputs">
                <label>Add Lowercase Letters</label>
                <input type="checkbox" onChange={(event)=>SetData({type:"lowCase",value:event.target.checked})}></input>
            </div>
            <div className="inputs">
                <label>Include Numbers</label>
                <input type="checkbox" onChange={(event)=>SetData({type:"num",value:event.target.checked})}></input>
            </div>
            <div className="inputs">
                <label>Include Symbols</label>
                <input type="checkbox" onChange={(event)=>SetData({type:"sym",value:event.target.checked})}></input>
            </div>
        </div>
    )
}

export default Body;