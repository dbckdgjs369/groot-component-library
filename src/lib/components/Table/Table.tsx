import {
  ChangeEvent,
  CSSProperties,
  ReactNode,
  useEffect,
  useState,
} from "react";

export interface TableHeaderInterface {
  id: string;
  label: string | React.JSX.Element;
  hasCheckBox?: boolean;
}

export interface TableProps {
  tableHeaders?: TableHeaderInterface[];
  children: ReactNode;
}

export default function Table<T>({
  tableHeaders,
  data,
  hasCheckBox,
  tdList,
  setCheckedList,
  onClickRow,
  thStyle,
  tdStyle,
}: {
  tableHeaders: TableHeaderInterface[];
  data?: T[];
  hasCheckBox?: boolean;
  tdList: (
    rowData: T
  ) => Partial<Record<keyof T & TableHeaderInterface["id"], React.JSX.Element>>;
  setCheckedList?: React.Dispatch<React.SetStateAction<T[]>>;
  onClickRow?: (data: T) => void;
  thStyle?: CSSProperties;
  tdStyle?: CSSProperties;
}) {
  const [selectedData, setSelectedData] = useState<T[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    // 페이지 변경시 및 체크박스 모두 체크되어있다면 header checkbox 체크 로직
    if (data?.every((element) => selectedData.includes(element))) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [data, selectedData]);

  const selectAll = () => {
    setIsAllChecked((prev) => !prev);
    if (data && setCheckedList) {
      if (isAllChecked) {
        setCheckedList([]);
        setSelectedData([]);
      } else {
        setCheckedList((prev) => [...new Set([...prev, ...data])]);
        setSelectedData((prev) => [...new Set([...prev, ...data])]);
      }
    }
  };
  const handleCheck = (ev: ChangeEvent<HTMLInputElement>, data: T) => {
    ev.stopPropagation();
    const { checked } = ev.currentTarget;
    if (!setCheckedList) {
      return;
    }
    if (checked) {
      setCheckedList((prev) => [...prev, data]);
      setSelectedData((prev) => [...prev, data]);
    } else {
      setCheckedList((prev) => prev.filter((e) => e !== data));
      setSelectedData((prev) => prev.filter((e) => e !== data));
    }
  };
  return (
    <table
      style={{
        borderStyle: "hidden",
        width: "100%",
        height: "100%",
        borderCollapse: "separate",
      }}
    >
      <thead>
        <th style={thStyle}>
          {hasCheckBox && (
            <td key={"checkbox"} style={{ whiteSpace: "nowrap" }}>
              <input
                type="checkbox"
                onChange={selectAll}
                checked={isAllChecked}
              />
            </td>
          )}
          {tableHeaders?.map((header) => (
            <td key={header.id as string} style={{ whiteSpace: "nowrap" }}>
              {header.label}
            </td>
          ))}
        </th>
      </thead>
      <tbody style={{ display: "table-row-group" }}>
        {data?.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={selectedData.includes(row) ? "selected" : "not_selected"}
            onClick={(ev) => {
              ev.stopPropagation();
              onClickRow?.(row);
            }}
          >
            {hasCheckBox && (
              <td key={rowIndex} onClick={(ev) => ev.stopPropagation()}>
                <div style={{ width: "fit-content" }}>
                  <input
                    type="checkbox"
                    onChange={(ev) => {
                      handleCheck(ev, row);
                    }}
                    checked={selectedData.includes(row)}
                  />
                </div>
              </td>
            )}
            {tableHeaders?.map((header, index) => (
              <td key={index} style={{ whiteSpace: "nowrap", ...tdStyle }}>
                {tdList(row)[header.id as keyof T & string]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
