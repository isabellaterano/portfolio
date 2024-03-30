const Alert = ({ type, text }) => {
  return (
    <div className="alert">
      <div className={`${type === "danger" ? "alert-danger" : "alert-pass"}`}>
        <p className={`${type === "danger" ? "alert-danger" : "alert-pass"}`}>
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Alert;
