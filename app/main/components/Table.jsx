"use client";

import React, { useMemo } from "react";
import { useTable } from "react-table";
import style from "../main.module.css";

const Table = ({ dataTable, columnTable, sign = false }) => {
  const data = useMemo(() => dataTable, [dataTable]);
  const columns = useMemo(() => columnTable, [columnTable]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className={style["container-table"]}>
      <table className={style["table"]} {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {sign && (
                  <th
                    style={{
                      backgroundColor: "#F7F7F7",
                    }}
                  ></th>
                )}

                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th
                      style={{
                        backgroundColor: "#F7F7F7",
                      }}
                      {...column.getHeaderProps()}
                    >
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row, idx) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {sign && <td>&gt;</td>}
                  {
                    // Loop over the rows cells
                    row.cells.map((cell, index) => {
                      // Apply the cell props
                      return (
                        <td
                          onClick={() => alert(cell.value)}
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
