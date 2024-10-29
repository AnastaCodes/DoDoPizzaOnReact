import s from './Button.module.scss'

export const Button = ({text, type}) => {
    return (
        <button className = {`${s.Button} ${s[type]}`}>{text}</button>
    )
}