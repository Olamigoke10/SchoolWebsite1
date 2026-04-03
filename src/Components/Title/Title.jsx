import './Title.css'

const Title = ({ subTitle, title, titleId }) => {
  return (
    <div className="title">
      <p>{subTitle}</p>
      <h2 id={titleId}>{title}</h2>
    </div>
  )
}

export default Title
