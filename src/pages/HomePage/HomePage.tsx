import { FC } from "react";
import styles from "./HomePage.module.css";
import { motion } from "framer-motion";
import { QuoteBlock } from "../../components/QuoteBlock/QuoteBlock";

export const HomePage: FC = () => {
  return (
    <main className={styles.homePage}>
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.textWrapper}>
          <motion.h1
            className={styles.title}
            initial={{ x: "-1000px" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Kaspersky
          </motion.h1>
          <motion.p
            className="text-4xl font-normal mb-10"
            initial={{ x: "900px" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Безопасность. Надежность. Гибкость.
          </motion.p>
        </div>
      </motion.section>
      <section className="pt-10 pb-20">
        <div className={styles.container}>
          <article className={styles.content}>
            <div className={styles.leftColumn}>
              <QuoteBlock
                author="Евгений Касперский "
                position="Генеральный директор «Лаборатории Касперского»"
              >
                Каждый имеет право чувствовать себя в безопасности
              </QuoteBlock>
              <div className="description text-left mt-6 font-base leading-5">
                «Лаборатория Касперского» — международная компания, работающая в
                сфере информационной безопасности и цифровой приватности с 1997
                года. Глубокие экспертные знания и многолетний опыт компании
                лежат в основе защитных решений и сервисов нового поколения,
                обеспечивающих безопасность бизнеса, критически важной
                инфраструктуры, государственных органов и рядовых пользователей.
                Обширное портфолио «Лаборатории Касперского» включает в себя
                передовые технологии для защиты конечных устройств, ряд
                специализированных продуктов и сервисов, а также кибериммунные
                решения для борьбы со сложными и постоянно эволюционирующими
                киберугрозами. Технологии «Лаборатории Касперского» защищают
                более 400 миллионов пользователей и 220 тысяч корпоративных
                клиентов во всём мире.
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.columnImage}></div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};
