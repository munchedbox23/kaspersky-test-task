import { FC } from "react";
import styles from "./HomePage.module.css";
import { motion } from "framer-motion";
import { QuoteBlock } from "../../components/QuoteBlock/QuoteBlock";
import { HomeSection } from "./HomeSection/HomeSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { points } from "../../utils/constants";

const variants = {
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.3,
    },
  }),
  hidden: {
    x: "-500px",
    opacity: 0,
  },
};

const AnimatedListItem: FC<{ text: string; index: number }> = ({
  text,
  index,
}) => (
  <motion.li
    className={styles.listItem}
    initial="hidden"
    animate="visible"
    variants={variants}
    custom={index}
  >
    <FontAwesomeIcon icon={faCheck} className="text-lg text-green-500" />
    <span className="font-base leading-5">{text}</span>
  </motion.li>
);

const StatisticsItem: FC<{ count: number; descr: string }> = ({
  count,
  descr,
}) => (
  <li className={styles.statisticItem}>
    <strong className="text-4xl leading-10">{`${count} млн`}</strong>
    <span>{descr}</span>
  </li>
);

export const HomePage: FC = () => (
  <main>
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
          className={`${styles.subtitle} text-4xl font-normal mb-10`}
          initial={{ x: "900px" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Безопасность. Надежность. Гибкость.
        </motion.p>
      </div>
    </motion.section>

    <HomeSection
      title="В чем преимущество решений «Лаборатории Касперского»?"
      image="https://content.kaspersky-labs.com/fm/site-editor/a6/a6a63b1eea6270748c9a34f31688b1eb/processed/protection-q75.webp"
    >
      <motion.div
        className={styles.content}
        initial={{ x: "-500px" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`${styles.describeHeading} leading-6 font-light text-lg mt-8`}
        >
          <strong className="font-bold">Все продукты Kaspersky</strong>
          используют передовые технологии искусственного интеллекта, способные
          обнаружить и нейтрализовать любую, даже неизвестную прежде
          онлайн-угрозу. При каждом подключении к интернету они:
        </div>
        <ul className={`${styles.points} mt-8`}>
          {points.map((point, index) => (
            <AnimatedListItem text={point.text} index={index} key={index} />
          ))}
        </ul>
      </motion.div>
    </HomeSection>

    <ul className={styles.statisticList}>
      {points.map((point, index) => (
        <StatisticsItem count={point.count} descr={point.descr} key={index} />
      ))}
    </ul>

    <HomeSection image="https://content.kaspersky-labs.com/fm/site-editor/64/64aa7d6c0a450a226bc2b348a4a60286/processed/ekhomepage-q93.webp">
      <QuoteBlock
        author="Евгений Касперский"
        position="Генеральный директор «Лаборатории Касперского»"
      >
        Каждый имеет право чувствовать себя в безопасности
      </QuoteBlock>
      <div className="description text-left mt-6 font-base leading-5">
        «Лаборатория Касперского» — международная компания, работающая в сфере
        информационной безопасности и цифровой приватности с 1997 года. Глубокие
        экспертные знания и многолетний опыт компании лежат в основе защитных
        решений и сервисов нового поколения, обеспечивающих безопасность
        бизнеса, критически важной инфраструктуры, государственных органов и
        рядовых пользователей. Обширное портфолио «Лаборатории Касперского»
        включает в себя передовые технологии для защиты конечных устройств, ряд
        специализированных продуктов и сервисов, а также кибериммунные решения
        для борьбы со сложными и постоянно эволюционирующими киберугрозами.
        Технологии «Лаборатории Касперского» защищают более 400 миллионов
        пользователей и 220 тысяч корпоративных клиентов во всём мире.
      </div>
    </HomeSection>
  </main>
);
