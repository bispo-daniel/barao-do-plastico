function ContactCard(props) {
  return (
    <div className="card w-[18rem] text-center mb-3 dark:bg-[#3c3c3c] dark:text-white hover:shadow-2xl hover:cursor-pointer hover:scale-105 transition">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.link} className="btn btn-primary hover:scale-105 transition">
          <span className="w-[100%] gap-2 flex min-w-[120px] justify-center">
            {props.btnIcon}
            {props.btnText}
          </span>
        </a>
      </div>
    </div>
  );
}

export default ContactCard;
