const Service = (props) => {
  const { icon, title, info } = props;
  
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{info}</p>
      </div>
    </article>
  );
};
export default Service;
