import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Explota tu talento TI<br className="sm:block hidden" /> y gana grandes premios!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Premios en efectivo, una beca para estudiar ingeniería del software en la Universidad Sergio Arboleda y un PC Gamer Acer Nitro 5, son algunos de los premios que tenemos para ti.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
