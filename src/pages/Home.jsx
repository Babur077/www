import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import Loader from '../comonents/loader'
import NewsList from '../comonents/newsList'
import { AuthContext } from '../context/authContext'

const API_URI = "https://jsonplaceholder.typicode.com/posts"

function Home() {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    // const [ state, dispatch ] = useContext(AuthContext);
    // console.log(state);

    const  fetchData = async () => {
        const response = await axios.get(API_URI)
        setData(response.data)
        setLoading(false)
    };

    useEffect(fetchData, []);

    if(loading) return <Loader />

    return(
        <div className="home">
            <div className="container">
                <NewsList data= {data} />
            </div>
        </div>
    )
}

export default Home;