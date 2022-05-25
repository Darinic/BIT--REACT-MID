import './div.scss'
const Div = (props) => {
    const random = (number) => {
        // console.log(Math.floor(Math.random()*255))
        return Math.floor(Math.random()*255)
    }
    const bgChange = (event) => {
        let rndColor = 'rgb('+random()+','+random()+','+random()+')';
        event.target.style.backgroundColor = rndColor
    }
    return(
        <div className="col-3" onClick={bgChange}>
            <h1>{props.number}</h1>
        </div>
    )
}

export default Div