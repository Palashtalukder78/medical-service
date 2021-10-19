import { useEffect, useState } from "react"

const useHappyPatients = () => {
    const [happyPatients, setHappyPatients] = useState([]);
    useEffect(() => {
        fetch('/happypatients.json')
            .then(res => res.json())
            .then(data => setHappyPatients(data))
    }, [])

    return { happyPatients, setHappyPatients }
}

export default useHappyPatients;