import { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  SnapDivider,
  SnapDividerLabel,
  SnapFileUploader,
  SnapLink,
} from "../../../suit";
import { FormData, defaultFormState } from "../../modals/PreApprovalsModal";
import * as XLSX from "xlsx";
import {
  findMatchingActivity,
  validateContact,
} from "../../../utils/ContactUtils";
import { compareScalarArrays } from "../../../utils/ArrayUtils";

interface ImportContactsProps {
  className?: string;
  forms: FormData[];
  setForms: Dispatch<SetStateAction<FormData[]>>;
  upload: boolean;
  setUpload: Dispatch<SetStateAction<boolean>>;
}

export interface XLSFormData {
  "First Name": string;
  "Last Name": string;
  Email: string;
  Activity: string;
}

const ImportContacts: React.FC<ImportContactsProps> = ({
  className,
  forms,
  setForms,
  upload,
  setUpload,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(1);

  const handleUpload = async (event: CustomEvent) => {
    const file: File = event.detail[0];
    const fileType: string = file.type;

    if (
      fileType ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      fileType === "application/vnd.ms-excel"
    ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          const workbook = XLSX.read(e.target?.result, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData: XLSFormData[] = XLSX.utils.sheet_to_json(worksheet);
          setCount(count + 1);
          const newForms = jsonData.map((contact, index) => {
            return {
              id: index + count,
              firstName: contact["First Name"],
              lastName: contact["Last Name"],
              activity:
                contact.Activity && findMatchingActivity(contact.Activity),
              email: contact.Email.toLowerCase(),
              errors: {
                firstName:
                  contact["First Name"] === ""
                    ? "Please enter a first name."
                    : "",
                lastName:
                  contact["Last Name"] === ""
                    ? "Please enter a last name."
                    : "",
                activity:
                  contact.Activity === "" ? "Please select an activity." : "",
                email:
                  contact.Email === ""
                    ? "Please enter a valid email address."
                    : "",
              },
            } as FormData;
          });
          const newFormsFiltered = newForms.filter(validateContact);
          if (compareScalarArrays(forms, defaultFormState)) {
            setForms(newFormsFiltered);
          } else setForms(forms.concat(newFormsFiltered));
          setUpload(true);
          ref.current?.scrollIntoView({ behavior: "smooth" });
          setCount(count + newFormsFiltered.length);
        }
      };
      reader.readAsArrayBuffer(file);
    } else if (fileType === "text/csv") {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          const results: any[] = [];
          const lines = e.target?.result.toString().split(/[\r\n]+/);
          lines.forEach((line) => {
            const data = line.split(",");
            results.push(data);
          });
          setCount(count + 1);
          const newForms = results.map((contact, index) => {
            return {
              id: index + count,
              firstName: contact[0],
              lastName: contact[1],
              activity: findMatchingActivity(contact[2]),
              email: contact[3].toLowerCase(),
              errors: {
                firstName:
                  contact[0] === "" ? "Please enter a first name." : "",
                lastName: contact[1] === "" ? "Please enter a last name." : "",
                activity: contact[2] === "" ? "Please select an activity." : "",
                email:
                  contact[3] === ""
                    ? "Please enter a valid email address."
                    : "",
              },
            } as FormData;
          });
          const newFormsFiltered = newForms.filter(validateContact);
          if (compareScalarArrays(forms, defaultFormState)) {
            setForms(newFormsFiltered);
          } else setForms(forms.concat(newFormsFiltered));
          setUpload(true);
          ref.current?.scrollIntoView({ behavior: "smooth" });
          setCount(count + newFormsFiltered.length);
        }
      };
      reader.readAsText(file);
    }
  };

  const [renderUploader, setRenderUploader] = useState(true); //rerender file-uploader, temporary fix until SUIT update

  const handleClear = () => {
    setRenderUploader(false);
    setTimeout(() => setRenderUploader(true), 0);
    setUpload(false);
    setForms(defaultFormState);
  };

  return (
    <div className={`${className} px-6`}>
      <div
        className="flex sm:flex-row flex-col "
        style={{
          height: upload ? "" : "calc(80vh - 243px)",
        }}
      >
        {renderUploader ? (
          <SnapFileUploader
            supportedFormats={["CSV", "XLS", "XLSX"]}
            onSnap-file-uploader-uploaded={handleUpload}
            maxFileSize={1}
          />
        ) : null}
        <div
          className="bg-gray-50 h-48 w-full p-4 sm:ml-6 sm:pl-4 pl-0 ml-4"
          style={{ borderRadius: "10px" }}
        >
          <h3 className="text-gray-500 font-medium">Templates</h3>
          <SnapLink
            icon="download-solid"
            className="mt-4 mb-6"
            href={
              process.env.PUBLIC_URL + "/templates/Pre-Approvals Template.csv"
            }
          >
            Download CSV Template
          </SnapLink>
          <SnapLink
            href={
              process.env.PUBLIC_URL + "/templates/Pre-Approvals Template.xlsx"
            }
            icon="download-solid"
          >
            Download XLS Template
          </SnapLink>
        </div>
      </div>
      <SnapDivider className={`${!upload && "hidden"} p-6`}>
        <SnapDividerLabel></SnapDividerLabel>
      </SnapDivider>
      <div
        className={`${!upload && "hidden"} flex justify-between pb-4`}
        ref={ref}
      >
        <h4 className="text-lg font-semibold text-gray-800 pb-1">
          Imported Contacts
        </h4>
        <SnapLink variant="danger" onClick={handleClear}>
          Clear & Start Over
        </SnapLink>
      </div>
    </div>
  );
};

export default ImportContacts;
