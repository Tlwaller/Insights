import { displayFormattedValue } from "./RenderDataUtils";
const html2pdf = require ('html2pdf.js');

/* Print Utils */
export interface PrintTableHeader {
  name: string;
  align: 'left' | 'center' | 'right';
}

export const generatePrintedReport = (data:any[], headers:PrintTableHeader[], title:string = '', subtitle:string = '', printWindow:Window|null) : boolean => {
  printWindow?.document.write('<html style="font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont; -webkit-print-color-adjust: exact;"><head><title>' + title + ' - ' + subtitle  + '</title>');
  printWindow?.document.write('</head><body >');
  printWindow?.document.write(generatePageHeader(title, subtitle));
  printWindow?.document.write(generatePrintedTable(data, headers));
  printWindow?.document.write('</body></html>');
  printWindow?.document.close(); // necessary for IE >= 10
  printWindow?.focus(); // necessary for IE >= 10*/
  printWindow?.print();
  printWindow?.close();
  return true;
};

export const generatePDFReport = (data: any[], headers: PrintTableHeader[], title: string = '', subtitle: string = ''): boolean => {
  const printContent = '<html style="font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont; -webkit-print-color-adjust: exact;"><head><title>' + title + ' - ' + subtitle + '</title></head><body >' +
    generatePageHeader(title, subtitle) +
    generatePrintedTable(data, headers) +
    '</body></html>';
  const filename = title + '-' + subtitle + '.pdf';
  html2pdf().from(printContent).save(filename);
  return true;
};

function generateCSV(data: any[], header: PrintTableHeader[]) {
  const headerRow = header.map(obj => obj.name).join(',') + '\n';

  const dataRows = data.slice(1).map(row => {
    const rowCells = [];

    for (const cell of row) {
      if (typeof cell === 'string' && /^\$\s*[\d,]+(\.\d{2})?$/.test(cell)) {
        // Remove all commas and spaces from the USD amount cell
        rowCells.push(cell.replace(/[, ]/g, ''));
      } else {
        rowCells.push(cell);
      }
    }

    return rowCells.join(',');
  }).join('\n');

  return headerRow + dataRows;
}

export const generateCSVReport = (
  data: any[],
  header: PrintTableHeader[],
  title: string = '',
): boolean => {
  const csv = generateCSV(data, header);

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${title}.csv`;
  link.style.display = 'none';
  document.body.appendChild(link);

  link.click();

  URL.revokeObjectURL(url);
  link.remove();

  return true;
};

const generatePageHeader = (title:string = '', subtitle:string = '') => {
  return (
    '<div style="display: flex; padding-bottom: 16px;">' +
      '<div style="flex-grow: 1;">' +
        '<h1 style="margin: 0; padding: 0 0 6px 0; color: #1E293B; font-weight: 600; font-size: 18px; line-height: 22px;">' + title  + '</h1>' +
        '<h2 style="margin: 0; padding: 0; color: #1E293B; font-weight: 600; font-size: 14px; line-height: 17px;">' + subtitle  + '</h2>' +
      '</div>' +
      '<img src="https://picsum.photos/100/45" alt="Generated by Snap! Mobile" />' +
    '</div>'
  );
 };

const generatePrintedTable = (data:any[], headers:PrintTableHeader[]) => {
  const headerItems = headers.map(header => {
    return '<th style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC; color: #64748B; font-weight: 500; font-size: 9px; line-height: 16px; padding: 4px; text-align: ' + header.align + ';">' + header.name.toUpperCase() + '</th>'
  });
  const rows = data.map((rowItem, rowIndex:number) => {
    const cells = rowItem.map((cellValue:any, cellIndex:number) => {
      return '<td style="color: #1E293B; font-weight: 400; font-size: 11px; line-height: 14px; padding: 4px; text-align: ' + headers[cellIndex].align + '; '+ (rowIndex%2 !== 0 ? 'background: #F8FAFC;' : '') +'">' + cellValue + '</td>'
    });
    return (
      '<tr>' +
        cells.join('') +
      '</tr>'
    )
  });
  return (
    '<div>' +
      '<table style="width:100%; border: 1px solid #E2E8F0; border-collapse: collapse;">' +
        '<tr>' + 
          headerItems.join('') +
        '</tr>' +
        rows.join('') +
      '</table>' +
    '</div>'
  );
};

export const printPreApprovalHeaders:PrintTableHeader[] = [
  {name: 'first name', align: 'left'},
  {name: 'last name', align: 'left'},
  {name: 'email', align: 'left'},
  {name: 'activity', align: 'left'},
  {name: 'sent on', align: 'left'},
  {name: 'status', align: 'left'},
  {name: 'actions', align: 'right'},
];


export const preApprovalToPrintData = (data:any[]) => {
  return data.map(preApprovalRow => {
    const arr = [];
    arr.push(preApprovalRow.firstName);
    arr.push(preApprovalRow.lastName);
    arr.push(preApprovalRow.email);
    arr.push(preApprovalRow.activity);
    arr.push(preApprovalRow.sentOn);
    arr.push(preApprovalRow.status);
    arr.push(preApprovalRow.actions);
    return arr;
  });
};

export const printPreApprovalDistrictHeaders:PrintTableHeader[] = [
  {name: 'first name', align: 'left'},
  {name: 'last name', align: 'left'},
  {name: 'email', align: 'left'},
  {name: 'activity', align: 'left'},
  {name: 'sent on', align: 'left'},
  {name: 'status', align: 'right'},
];


export const preApprovalDistrictToPrintData = (data:any[]) => {
  return data.map(preApprovalRow => {
    const arr = [];
    arr.push(preApprovalRow.firstName);
    arr.push(preApprovalRow.lastName);
    arr.push(preApprovalRow.email);
    arr.push(preApprovalRow.activity);
    arr.push(preApprovalRow.sentOn);
    arr.push(preApprovalRow.status);
    return arr;
  });
};



/* Print data: campaigns */
export const printCampaignHeaders:PrintTableHeader[] = [
  {name: 'school/affiliate', align: 'left'},
  {name: 'campaigns', align: 'left'},
  {name: 'program', align: 'left'},
  {name: 'status', align: 'right'},
  {name: 'total raised', align: 'right'},
];

export const campaignsToPrintData = (data:any[]) => {
  return data.map(campaignRow => {
    const arr = [];
    arr.push(campaignRow.schoolAffiliate);
    arr.push(campaignRow.campaign);
    arr.push(campaignRow.program);
    arr.push(campaignRow.status);
    arr.push(displayFormattedValue(campaignRow.totalRaised, 'money'));
    return arr;
  });
};

/* Print data: settlements */
export const printSettlementHeaders:PrintTableHeader[] = [
  {name: 'school/affiliate', align: 'left'},
  {name: 'campaigns', align: 'left'},
  {name: 'method', align: 'left'},
  {name: 'status', align: 'right'},
  {name: 'amount', align: 'right'},
  {name: 'last updated', align: 'right'},
];

export const settlementsToPrintData = (data:any[]) => {
  return data.map(settlementRow => {
    const arr = [];
    arr.push(settlementRow.schoolAffiliate);
    arr.push(settlementRow.campaign);
    arr.push(settlementRow.method);
    arr.push(settlementRow.status);
    arr.push(displayFormattedValue(settlementRow.amount, 'money'));
    arr.push(settlementRow.lastUpdated);
    return arr;
  });
};

/* Print data: schools/affiliates */
export const printSchoolAffiliateHeaders:PrintTableHeader[] = [
  {name: 'school/affiliate', align: 'left'},
  {name: 'organization', align: 'left'},
  {name: 'total raised', align: 'right'},
  {name: 'number of campaigns', align: 'right'},
];

export const schoolsAffiliatesToPrintData = (data:any[]) => {
  return data.map(schoolAffiliateRow => {
    const arr = [];
    arr.push(schoolAffiliateRow.schoolAffiliate);
    arr.push(schoolAffiliateRow.organization);
    arr.push(displayFormattedValue(schoolAffiliateRow.totalRaised, 'money'));
    arr.push(schoolAffiliateRow.numberCampaigns);
    return arr;
  });
};

/* Print data: programs */
export const printProgramHeaders:PrintTableHeader[] = [
  {name: 'school/affiliate', align: 'left'},
  {name: 'program', align: 'left'},
  {name: 'total raised', align: 'right'},
  {name: 'number of campaigns', align: 'right'},
];

export const programsToPrintData = (data:any[]) => {
  return data.map(programRow => {
    const arr = [];
    arr.push(programRow.schoolAffiliate);
    arr.push(programRow.program);
    arr.push(displayFormattedValue(programRow.totalRaised, 'money'));
    arr.push(programRow.numberCampaigns);
    return arr;
  });
};

/* Print data: kyc */
export const printKycHeaders:PrintTableHeader[] = [
  {name: 'school/affiliate', align: 'left'},
  {name: 'campaigns', align: 'left'},
  {name: 'dates', align: 'right'},
  {name: 'preloading', align: 'right'},
];

export const kycsToPrintData = (data:any[]) => {
  return data.map(kycRow => {
    const arr = [];
    arr.push(kycRow.schoolAffiliate);
    arr.push(kycRow.campaign);
    arr.push(kycRow.dates);
    arr.push(kycRow.preloading);
    return arr;
  });
};

/* Print data: donations */
export const printDonationHeaders:PrintTableHeader[] = [
  {name: 'school/affiliate', align: 'left'},
  {name: 'donor', align: 'left'},
  {name: 'campaign', align: 'left'},
  {name: 'program', align: 'left'},
  {name: 'participant', align: 'left'},
  {name: 'amount', align: 'right'},
];

export const donationsToPrintData = (data:any[]) => {
  return data.map(donationRow => {
    const arr = [];
    arr.push(donationRow.schoolAffiliate);
    arr.push(donationRow.donor);
    arr.push(donationRow.campaign);
    arr.push(donationRow.program);
    arr.push(donationRow.participant);
    arr.push(displayFormattedValue(donationRow.amount, 'money'));
    return arr;
  });
};

/* Print data: deposits */
export const printDepositnHeaders:PrintTableHeader[] = [
  {name: 'school/affiliate', align: 'left'},
  {name: 'campaigns', align: 'left'},
  {name: 'group leader', align: 'left'},
  {name: 'dates', align: 'right'},
];

export const depositsToPrintData = (data:any[]) => {
  return data.map(depositRow => {
    const arr = [];
    arr.push(depositRow.schoolAffiliate);
    arr.push(depositRow.campaign);
    arr.push(depositRow.leader);
    arr.push(depositRow.dates);
    return arr;
  });
};