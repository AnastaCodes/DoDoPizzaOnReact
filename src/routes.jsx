import { createBrowserRouter } from "react-router-dom";
import {Main} from './pages/Main/Main'
import {Basket} from './pages/Basket/Basket'
import {OrderAccepted} from './pages/OrderAccepted/OrderAccepted'
import {PlacingAnOrder} from './pages/PlacingAnOrder/PlacingAnOrder'

const router = createBrowserRouter([
    {
        path: '/',
        element : <Main/>
    },
    {
        path: '/Basket',
        element : <Basket/>
    },
    {
        path: '/OrderAccepted',
        element : <OrderAccepted/>
    },
    {
        path: '/PlacingAnOrder',
        element : <PlacingAnOrder/>
    },
    {
        path: '*',
        element : <div>Error: Page is not found</div>
    },
])

export default router;