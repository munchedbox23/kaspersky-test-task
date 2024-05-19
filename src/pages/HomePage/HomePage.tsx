import { FC } from "react";
import styles from "./HomePage.module.css";
import { motion } from "framer-motion";
import { QuoteBlock } from "../../components/QuoteBlock/QuoteBlock";

export const HomePage: FC = () => {
  return (
    <main>
      <motion.section
        className={styles.hero}
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
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
      <section className={styles.about}>
        <div className={styles.container}>
          <article className={styles.content}>
            <div className={styles.leftColumn}>
              <QuoteBlock
                author="Евгений Касперский"
                position="Генеральный директор «Лаборатории Касперского»"
              >
                Каждый имеет право чувствовать себя в безопасности
              </QuoteBlock>
            </div>
            <div className={styles.rightColumn}></div>
          </article>
        </div>
      </section>
    </main>
  );
};
