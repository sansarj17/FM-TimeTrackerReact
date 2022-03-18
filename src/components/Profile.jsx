export default function Profile({ view, viewTo }) {
  function handleClick(e) {
    const { id: viewValue } = e.target.dataset;
    viewTo(viewValue);
  }

  return (
    <div className="grid-item main-section profile common-blue-bg">
      <div className="main-person">
        <img src="./images/image-jeremy.png" alt="" />
        <div className="text-part">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="category">
        <p
          data-id="0"
          className={view === "0" ? `category-active` : null}
          onClick={handleClick}
        >
          Daily
        </p>
        <p
          data-id="1"
          className={view === "1" ? `category-active` : null}
          onClick={handleClick}
        >
          Weekly
        </p>
        <p
          data-id="2"
          className={view === "2" ? `category-active` : null}
          onClick={handleClick}
        >
          Monthly
        </p>
      </div>
    </div>
  );
}
