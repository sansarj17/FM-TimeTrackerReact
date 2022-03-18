export default function SubSection(props) {
  return (
    <div className={`grid-item sub-section ${props.title}`}>
      <div className="img-wrapper">
        <img src={props.imgSrc} alt="" />
      </div>
      <div className="content">
        <div className="sub-header">
          <p className="sub-head">
            {props.title === "self" ? `Self Care` : props.title}
          </p>
          <img src="./images/icon-ellipsis.svg" alt="" />
        </div>
        <div className="sub-content">
          <h2>{props.timeVal.current}hrs</h2>
          <p>
            Last {props.viewType} - {props.timeVal.previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}
