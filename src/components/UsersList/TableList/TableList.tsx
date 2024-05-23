import { FC, useMemo } from "react";
import styles from "./TableList.module.css";
import { TListProps, IUser } from "../../../types/userTypes";
import { useTable, useSortBy, Column, usePagination } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faSortUp,
  faAnglesLeft,
  faAnglesRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export const TableList: FC<TListProps> = ({ data }) => {
  const columns: Column<IUser>[] = useMemo(
    () => [
      { Header: "Полное имя", accessor: "name" },
      { Header: "Учетная запись", accessor: "account" },
      { Header: "Электронная почта", accessor: "email" },
      { Header: "Группа", accessor: "group" },
      { Header: "Номер телефона", accessor: "phone" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <motion.div className={styles.container}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={`header-group-${i}`}
              >
                {headerGroup.headers.map((column, j) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={`header-${i}-${j}`}
                  >
                    {column.render("Header")}
                    {column.isSorted && (
                      <FontAwesomeIcon
                        icon={column.isSortedDesc ? faSortDown : faSortUp}
                      />
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={`row-${i}`}>
                  {row.cells.map((cell, j) => (
                    <td {...cell.getCellProps()} key={`cell-${i}-${j}`}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </motion.div>
      <div className={styles.pagination}>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:
          <input
            min={1}
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
