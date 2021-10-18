import { useState } from "react"

const useAppoinment = () => {
    const [appoinment, setAppoinment] = useState({
        department: '',
        doctor: '',
        date: '',
        pataient: '',
        email: '',
        phone: '',
        message: '',
        save: false
    })
    return { appoinment, setAppoinment }
}
export default useAppoinment;