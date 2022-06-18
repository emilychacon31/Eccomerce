import './Input.scss';
//Input universal 
const Input = ({label, type, onChange,value,name, required}) => {
  return (
    <div>
        <label>{label}</label>
        <input 
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