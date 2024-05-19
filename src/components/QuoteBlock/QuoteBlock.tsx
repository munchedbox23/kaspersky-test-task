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
      <cite className={`${quoteStyles.author} mt-10`}>
        <span className="text-xl leading-6 font-bold">{author}</span>
        <span className="mt-2 text-base font-light">{position}</span>
      </cite>
    </div>
  );
};
