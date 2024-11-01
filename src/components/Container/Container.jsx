import s from './Container.module.css'

export const Container = ({children, scrollbar = false}) => {return (
    <div className={`${s.container} ${scrollbar ? 'scrollbar' : ''}`}>
        {children}
    </div>)}