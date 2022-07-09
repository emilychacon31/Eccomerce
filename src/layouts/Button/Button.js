import './Button.scss';
const Button = ({ type, texto, onClick }) => {
  return (
    <button onClick={onClick} type={type}>
      {texto}
    </button>
  )
}

export default Button;
