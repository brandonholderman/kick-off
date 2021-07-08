import Axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getRecipes() {
            try {
                const response = await Axios.get(url);
                setData(response.data.hits);
                console.log(response.data.hits);
                setIsLoading(false);
                setError(null);
            } catch (err) {
                if(err.name === 'AbortError') {
                    console.log(`Fetch aborted`);
                } else {
                    setIsLoading(false);
                    setError(err.message);
                }
            }
        }
    }, [url])

    return { data, isLoading, error }
}
 
export default useAxios;