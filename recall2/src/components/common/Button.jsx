

const Button = ({text,color,label}) => {
    return (
    <div className={`${color}  w-35 text-center px-6 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition-all`}> 
    {label}
    {text}</div>)
};
export default Button