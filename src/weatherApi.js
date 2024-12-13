import { useEffect, useState } from "react";

const getWeatherInfo = () => {
    const [weatherInfo, setWeatherInfo] = useState(null);

    useEffect(()=>{
        try {
            fetch('')
        } catch (error) {
            console.error("something went wrong...")
        }
    },[])
}