import { useState, useEffect } from "react"

function Alert({ mensaje }) {
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        if (mensaje.includes("Registro exitoso")) {
            setIsSuccess(true)
        } else {
            setIsSuccess(false)
        }
    }, [mensaje])

    return (
        <>{
            mensaje.length > 0
                ? <ul className={`alert ${isSuccess ? "alert-success" : "alert-danger"} lista`}>
                    {mensaje.map((e, index) => {
                        return (
                            <li key={index}>
                                <p>{e}</p>
                            </li>
                        )
                    })}
                </ul>
                : ""
        }

        </>
    )
}

export default Alert