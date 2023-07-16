function ContactCard(props) {
  return (
      <div className="card text-center mb-3" style={{ width: '18rem' }}>
          <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.text}</p>
              <a href={props.link} className="btn btn-primary ">
                <span className="w-[100%] gap-2 flex min-w-[120px] justify-center">{props.btnIcon}{props.btnText}</span>
              </a>
          </div>
      </div>
  )
}

export default ContactCard