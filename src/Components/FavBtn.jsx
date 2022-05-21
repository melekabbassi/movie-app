import {useState} from 'react'
import Star from '@mui/icons-material/Star';


const FavBtn = () => {
    const [favorite, setFavorite] = useState([]);

  return (
      
    <div className="caption">
        <button
            onClick={() => setFavorite(!favorite)}
            className="fav-button-wrapper"
        >
            <div className="favorite-button">
                <Star className="fav-button-icon" />
            </div>   
        </button>
    </div>
    )
}

export default FavBtn