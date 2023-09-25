
export interface CardValueProps {
  value: string | number | undefined;
  entity?: any;
}

export interface ReportCardTitle {
  value?: string | number;
  key?: string;
}

export interface ReportCardData {
  type: 'data' | 'divider',
  key?: string,
  layout?: '1-col' | '2-col',
  label?: string,
  renderValue?: (props:CardValueProps) => string | number | React.ReactNode | undefined,
  renderValueNode?: boolean;
}

export interface ReportCardStructure {
  title: ReportCardTitle;
  dataList: ReportCardData[];
}