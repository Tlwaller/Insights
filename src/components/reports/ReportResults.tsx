/**
 * Report results box for all reports (including title, export options, pagination, etc)
 */
import React, {useContext} from 'react';
import { SnapLink } from '../../suit';
import ReportResultsTable from './ReportResultsTable';
import { ColumnDef } from '@tanstack/react-table';
import ReportResultsCardList from './ReportResultsCardList';
import { ReportCardStructure } from './cardstructure/CardStructureTypes';
import { AppContext } from '../../AppGlobalState';
import { isScreenSizeEqualOrAbove, isScreenSizeBelow } from '../../utils/UIUtils';
import { PrintTableHeader, generateCSVReport, generatePDFReport } from '../../utils/PrintUtils';

interface ReportResultsProps {
  section: string;
  title: string;
  tableColumns: ColumnDef<any>[];
  cardStructure: ReportCardStructure;
  reportData: any[];
  printHeaders: PrintTableHeader[];
  printData: any[];
  tableDataLoaded: boolean;
}

const ReportResults: React.FC<ReportResultsProps> = ({ section, title, tableColumns, cardStructure, reportData, printHeaders, printData, tableDataLoaded }) => {
  const {appState} = useContext(AppContext);

  const downloadPDF = () => {
    generatePDFReport(printData, printHeaders, section, title);
  };
  const downloadCSV = () => {
    generateCSVReport(printData, printHeaders, title);
  }; 
  return (
    <div className="mt-6">
      <div className="flex flex-row pb-4">
        <div className="grow">
          <h5 className="font-semibold text-lg text-gray-800">{title}</h5>
        </div>
        {isScreenSizeEqualOrAbove(appState.windowSize.screen, 'sm') &&
          <>
            <SnapLink text="Download/Print PDF" icon="document-solid" onClick={downloadPDF} size="sm" className="ml-4"></SnapLink>
            <SnapLink text="Download/Print CSV" icon="document-solid" onClick={downloadCSV} size="sm" className="ml-4"></SnapLink>
          </>
        }
      </div>
      {isScreenSizeBelow(appState.windowSize.screen, 'sm') &&
        <ReportResultsCardList 
          cardStructure={cardStructure}
          data={reportData}
          tableDataLoaded={tableDataLoaded}
        />
      }
      {isScreenSizeEqualOrAbove(appState.windowSize.screen, 'sm') &&
        <ReportResultsTable
          columns={tableColumns}
          data={reportData}
          tableDataLoaded={tableDataLoaded}
        />
      }
    </div>
  );
};

export default ReportResults;
