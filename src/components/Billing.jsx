import {bill} from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Nuestro objetivo 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Nuestro objetivo principal es potenciar la educación tecnológica en Colombia y abrir nuevas puertas de oportunidad para todos los entusiastas de la tecnología en el país.
      <br></br>
      Creemos firmemente que la educación es la clave para el progreso y el desarrollo de una nación. Queremos fomentar un ecosistema educativo sólido que forme profesionales altamente capacitados y preparados para enfrentar los desafíos del mundo tecnológico en constante evolución.
      </p>
    </div>
  </section>
);

export default Billing;
