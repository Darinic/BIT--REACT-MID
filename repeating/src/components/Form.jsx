import { useState } from "react"

const Form = () => {
    const [formData, setFormData] = useState() //state kurimas

    const handleChange= (event) => {
        setFormData({
            ...formData,
            [event.target.name]:event.target.value,
        })
    }

    console.log(formData)
    return(
        <form>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Jūsų vardas" onChange={handleChange} name="name"></input>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Jūsų El. Paštas" onChange={handleChange} name="email"></input>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Akių spalva" onChange={handleChange} name="color"></input>
            </div>
            <div className="form-group">
                <button type="submit">Siųsti</button>
            </div>
        </form>
    )

}

export default Form