import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="School courtyard with students" />
        <img src={gallery_2} alt="Classroom learning activity" />
        <img src={gallery_3} alt="Library and study space" />
        <img src={gallery_4} alt="Outdoor campus gathering" />
      </div>
      <button type="button" className="btn dark-btn">
        See more here <img src={white_arrow} alt="" aria-hidden="true" />
      </button>
    </div>
  )
}

export default Campus
