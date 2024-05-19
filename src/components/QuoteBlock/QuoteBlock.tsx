import { FC, ReactNode } from "react";
import quoteStyles from "./QuoteBlock.module.css";

type TQuoteBlock = {
  author: string;
  children: ReactNode;
  position: string;
};

export const QuoteBlock: FC<TQuoteBlock> = ({ author, children, position }) => {
  return (
    <div className={quoteStyles.block}>
      <blockquote className={quoteStyles.quote}>{children}</blockquote>
      <cite className={quoteStyles.author}>
        <span className="">{author}</span>
        <span className="">{position}</span>
      </cite>
    </div>
  );
};
