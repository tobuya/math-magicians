import style from './Quote.module.css';

const Quote = () => (
  <section className={style.container}>
    <p className={style.para}>
      Mathematics is not about numbers, equations, computations, or algorithms:
      It is about understanding ---William Paul Thurston
    </p>
  </section>
);

export default Quote;
