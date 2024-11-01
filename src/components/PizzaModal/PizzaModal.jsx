import s from './PizzaModal.module.scss'

export const PizzaModal = ({onCklick}) => {
    return (
<div className={s.modal}>
    <div className={s.imgContainer}></div>
    <div>
        <h1>Чиззи чеддер</h1>
        <p>30 см, традиционное тесто, 480 г</p>
    </div>
</div>
)}