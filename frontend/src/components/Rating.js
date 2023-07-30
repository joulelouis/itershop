import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

//take in props 'value' and 'text'
// 'Rating.js' component handles the rendering of star icons and optional review text.
const Rating = ({ value, text }) => {

	return (

		<div className="rating">
			<span>
				{/*conditional rendering in JSX*/}
				{/* '{}' indicate that this is an inline JavaScript expression in JSX */}
				{/* ternary operator '? :' */}
				{ value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
			</span>
			<span>
				{ value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
			</span>
			<span>
				{ value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
			</span>
			<span>
				{ value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
			</span>
			<span>
				{ value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
			</span>

			<span className="rating-text">{ text ? text : null }</span>
		</div>
	)
}
export default Rating;