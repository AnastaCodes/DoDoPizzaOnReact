import s from './Category.module.css'
import { ProductCard } from '../../ui/ProductCard/ProductCard'
import Picture  from '../../assets/img/image-3-pizza.jpg'
import { Container } from '../../components/Container/Container'
import { data } from '../../data.js'
//переписать дриллинг на UseContext

export const Category = ({title, type='txt', onClick, getItem}) => {
    const typeItem = data.filter((item) => item.type === type);
    console.log(type[0].items);
    
    return (
      <Container>
        <h2>{title}</h2>
        <div className={s.wrapper}>
          {typeItem[0]?.items.map((el) => (
            <ProductCard
              img={
                type==='pizza' ? el.middle.img : el.img
              }
              name={el.name}
              description={el.description}
              price={
                type === 'pizza' ? el.small.price : el.price
            }
              txtButton="Выбрать"
              onClick = {()=> onClick(el.name)}
              getItem ={getItem}
            />
          ))}
        </div>
      </Container>
    );
}