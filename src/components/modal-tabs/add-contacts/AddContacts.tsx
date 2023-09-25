import React, { useRef } from "react";
import ContactForm from "./ContactForm";
import { SnapIcon, SnapLink } from "../../../suit";
import { FormData } from "../../modals/PreApprovalsModal";
import {
  SnapInputCustomEvent,
  SnapSelectMenuCustomEvent,
} from "@snap-mobile/snap-ui/dist/types/components";

interface AddContactsProps {
  className: string;
  forms: FormData[];
  onFormChange: (
    index: number
  ) => (
    event: SnapInputCustomEvent<any> | SnapSelectMenuCustomEvent<any>
  ) => void;
  onAddForm: () => void;
  onDeleteForm: (index: number, length: number) => void;
  onClose: () => void;
}

const AddContacts: React.FC<AddContactsProps> = ({
  className,
  forms,
  onFormChange,
  onAddForm,
  onDeleteForm,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleAddForm = () => {
    onAddForm();
    setTimeout(() => ref.current?.scrollIntoView({ behavior: "smooth" }), 1);
  };

  return (
    <div
      className={className}
      style={{
        height: "calc(80vh - 243px)", //temporary fix until dropdown is updated
      }}
    >
      {forms.map((form, index) => (
        <ContactForm
          key={form.id}
          className={index % 2 === 0 ? "bg-gray-50" : ""}
          formData={form}
          onChange={onFormChange(index)}
          onDelete={() => onDeleteForm(index, forms.length)}
          forms={forms}
        />
      ))}
      <div className="w-full flex flex-row justify-end p-4 pb-24 md:pb-4">
        <SnapIcon icon="plus-solid" color="blue" className="pr-1" />
        <SnapLink variant="default" size="sm" onClick={handleAddForm}>
          Add Contact
        </SnapLink>
      </div>
      <div ref={ref} />
    </div>
  );
};

export default AddContacts;
