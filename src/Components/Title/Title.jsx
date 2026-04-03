import './Title.css'

const Title = ({ subTitle, title, titleId, icon: Icon }) => {
  return (
    <div className="title">
      {Icon ? (
        <span className="title__icon-wrap" aria-hidden>
          <Icon size={22} strokeWidth={2} />
        </span>
      ) : null}
      <p className="title__eyebrow">{subTitle}</p>
      <div className="title__rule" aria-hidden />
      <h2 id={titleId}>{title}</h2>
    </div>
  )
}

export default Title
