const Alert = ({ type, text }) => {
  return (
    <div className="alert">
      <div className={type === "danger" ? "alert-danger" : "alert-pass"}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Alert;
