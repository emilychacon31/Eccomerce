import './Input.scss';
//Input universal 
const Input = ({ label, key, type, onChange, value, name, required }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        key={key}
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        required={required}
      />
    </div>
  )
}

export default Input