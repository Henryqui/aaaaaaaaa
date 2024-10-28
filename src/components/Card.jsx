import styles from './Card.module.css'
import produto from '../assets/manga-longa-estonada-inferno-aranha-sku2.jpg'

export function Card(){
    return(
        <article className={styles.space}>
         <div className={styles.container}>
            <img src={produto} alt="" />
            <h4>Blusa Relva Aranha</h4>
            <h5>ED. LIMITADA</h5>
            <br />
            <p>129,99R$</p>         
            <span>Comprar</span>
            
         </div>
        </article>
        
    );
}