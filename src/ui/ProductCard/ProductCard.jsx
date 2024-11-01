import s from './ProductCard.module.scss';
import { Button } from '../Button/Button';

export const ProductCard = ({img, name, description, price, txtButton}) => {
    return (
        <article className = {s.ProductCard}>
            <img className = {s.Image} src={img} alt= {name} />
            <div className = {s.Product}>
                <p className = {s.name}> {name} </p>
                <p className = {s.description}> {description} </p>
                <p className = {s.price}> {price} </p>
                <Button text = {txtButton} />
            </div>
        </article>
    )
}

export default ProductCard