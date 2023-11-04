export default function ContactCard({
  title,
  text,
  link,
  btnIcon,
  btnText,
  extra
}) {
  return (
    <div className="card w-[18rem] text-center mb-3 dark:bg-[#3c3c3c] dark:text-white hover:shadow-2xl hover:cursor-pointer hover:scale-105 transition">
      <div className="card-body flex flex-col justify-between items-center">
        <div>
          <h5 className="card-title">{title}</h5>
          <span className="flex flex-col">
            <p className={`card-text ${extra ? "mb-0" : undefined}`}>{text}</p>
            <p className={`card-text ${extra ? "mb-2" : undefined}`}>{extra}</p>
          </span>
        </div>

        <a
          href={link}
          target="_blank"
          className="btn bg-[#FF50B0] hover:scale-105 transition text-white"
          rel="noreferrer"
        >
          <span className="w-[100%] gap-2 flex min-w-[120px] justify-center">
            {btnIcon}
            {btnText}
          </span>
        </a>
      </div>
    </div>
  );
}
