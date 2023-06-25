import './Movie.css'

const Movie = ({imdbID, link, image, category, title, year}) => {

      if (image === 'N/A') {
         image = 'https://via.placeholder.com/300x450.png?text=Image+Not+Found'
      }

      return (
               <div className="container" onClick={() => {
                  window.open(`${link}`, '_blank')
               }}>
                  <div className="image">
                     <img src={image} alt="" srcset="" />
                  </div>
                  <div className="details">
                     <div className="category">{category}</div>
                     <div className="movie-title">{title}</div>
                     <div className="year">{year}</div>
                  </div>
               </div>
      )
}

export default Movie