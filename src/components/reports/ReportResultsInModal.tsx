/**
 * Report results box for all reports (including title, export options, pagination, etc)
 */
 import React, {useContext} from 'react';
 import ReportResultsTable from './ReportResultsTable';
 import { ColumnDef } from '@tanstack/react-table';
 import ReportResultsCardList from './ReportResultsCardList';
 import { ReportCardStructure } from './cardstructure/CardStructureTypes';
 import { AppContext } from '../../AppGlobalState';
 import { isScreenSizeEqualOrAbove, isScreenSizeBelow } from '../../utils/UIUtils';
 
 interface ReportResultsInModalProps {
   tableColumns: ColumnDef<any>[];
   cardStructure: ReportCardStructure;
   reportData: any[];
   tableDataLoaded: boolean;
 }
 
 const ReportResultsInModal: React.FC<ReportResultsInModalProps> = ({ tableColumns, cardStructure, reportData, tableDataLoaded }) => {
   const {appState} = useContext(AppContext);
 
   return (
     <div>
       {isScreenSizeBelow(appState.windowSize.screen, 'sm') &&
         <ReportResultsCardList 
           cardStructure={cardStructure}
           data={reportData}
           hideSort
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
 
 export default ReportResultsInModal;
 