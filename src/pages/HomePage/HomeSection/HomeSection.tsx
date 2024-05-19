import { FC, PropsWithChildren } from "react";
import styles from "./HomeSection.module.css";
import { motion } from "framer-motion";

type THomeSectionProps = {
  title?: string;
  image?: string;
};

export const HomeSection: FC<PropsWithChildren<THomeSectionProps>> = ({
  title,
  children,
  image,
}) => {
  return (
    <section className="pb-20">
      <h2 className="pt-10 text-4xl leading-10 font-bold text-center mb-12">
        {title}
      </h2>
      <div className={styles.container}>
        <motion.article
          className={styles.content}
          initial={{ x: "500px" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className={styles.leftColumn}>{children}</div>
          <div className={styles.rightColumn}>
            <motion.div
              style={{ backgroundImage: `url(${image})` }}
              className={styles.columnImage}
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};
