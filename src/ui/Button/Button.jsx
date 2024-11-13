import s from './Button.module.scss'

export const Button = ({text, type, w100, onClick, getItem}) => {
    return (
        <button className = {`${s.Button} ${s[type]} ${s[w100]}`} onClick={onClick}>{text}</button>
    )
}