import Link from "next/link";
import React from "react";
import { Filters } from "../../constants/constants";
import styles from "../../styles/Home.module.scss";

export interface FilterProps {
  filter?: Filters;
  className?: string;
}

const Filter = ({
  filter,
  className = "",
}: FilterProps): JSX.Element | null => {
  return (
    <div className={`${styles.filters} ${className}`}>
      {Object.entries(Filters).map(
        ([currentFilterKey, currentFilter]: [key: string, value: string]) => {
          console.log(currentFilter);
          return (
            <Link href={`/${currentFilterKey}`} passHref key={currentFilter}>
              <div
                className={`${styles.filter} ${
                  filter === currentFilterKey ? styles.selected : ""
                }`}
              >
                {currentFilter}
              </div>
            </Link>
          );
        }
      )}
    </div>
  );
};

export default Filter;
