import s from './Button.module.scss'

export const Button = ({text, type, w100}) => {
    return (
        <button className = {`${s.Button} ${s[type, w100]}`}>{text}</button>
    )
}