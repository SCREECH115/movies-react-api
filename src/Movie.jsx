import './Movie.css'

const Movie = ({image, category, title}) => {
      return (
               <div className="container">
                  <div className="image">
                     <img src={image} alt="" srcset="" />
                  </div>
                  <div className="details">
                     <div className="category">{category}</div>
                     <div className="movie-title">{title}</div>
                  </div>
               </div>
      )
}

export default Movie