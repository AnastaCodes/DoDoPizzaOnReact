import { useNavigate } from 'react-router-dom'

import s from './Main.module.css'

export const Main = () => {
    const navigate = useNavigate()
    return <div>
    <h1 onClick={() => navigate('/OrderAccepted')}>HALLO WORLD</h1>
    
</div>}