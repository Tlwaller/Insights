import { RowData } from '@tanstack/react-table';

declare module '@tanstack/table-core' {
  // eslint-disable-next-line
  interface ColumnMeta<TData extends RowData, TValue> {
    headerClassName?: string,
    cellClassName?: string,
  }
}