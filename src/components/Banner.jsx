import styles from './Banner.module.css'
import banner from '../assets/inferno-pt2-3.jpg'

export function Banner(){
         return(
             <article>
                  <div className={styles.container}>
                  <img src={banner} alt="" />
                  </div>
             </article>
         )
};