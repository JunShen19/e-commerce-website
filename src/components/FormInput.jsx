// eslint-disable-next-line react/prop-types
const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        className="input input-bordered"
        type={type}
        name={name}
        value={defaultValue}
      ></input>
    </div>
  );
};

export default FormInput;
