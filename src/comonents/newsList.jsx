import NewsCard from './newsCard'
import './styles/newsList.css'

function NewsList({data = []}){
     const partofData = data.slice(0, 20)
    return(
       <div className="newsList">
           {partofData.map((news, indx) => (
               <NewsCard data={news} key={`news-${indx}`} />
           ))}
       </div>
    );
}

export default NewsList;