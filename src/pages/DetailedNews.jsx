import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../comonents/loader";

const API_URI = id => "https://jsonplaceholder.typicode.com/posts/" + id;

function DetailedNews() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

    const { newsID } = useParams();
    const fetchData = async () => {
        const response = await axios.get(API_URI(newsID));
        setData(response.data)
        setLoading(false)
    }
    useEffect(fetchData, [])
    if (loading) return <Loader />
    return (

        <div className="newsDeteils">
            <div className="container">
                <Link to="/">Home</Link>
                <img src={`https://picsum.photos/id/${data.id+50}/1400/350`} alt={data.title} />
                <h1>{data.title}</h1>
                <p>
                    {data.body}
                </p>
            </div>
            
        </div>
    )
}

export default DetailedNews;