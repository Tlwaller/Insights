import React from 'react';
import { SnapCheckboxButton, SnapLink } from '../suit';
import { ContactInformation } from './ContactTypes';

interface ContactSelectorProps {
  contactList: ContactInformation[];
}

const ContactSelector: React.FC<ContactSelectorProps> = ({ contactList }) => {
  return (
    <div className="flex flex-col mb-4">
      <div className="flex flex-row justify-between w-full mb-1">
        <p className="text-sm font-medium text-gray-700">To</p>
        <div className="flex flex-row justify-between">
          <SnapLink text="Select All" onClick={() => {}} size="xs"></SnapLink>
          <div className="w-[1px] bg-gray-300 mx-4"></div>
          <SnapLink text="Clear All" onClick={() => {}} size="xs"></SnapLink>
        </div>
      </div>
      <div className="w-full h-52 overflow-y-auto border-gray-300 border rounded-md">
        {(contactList.length > 0) &&
          contactList.map((contact, index) => {
            return (
              <div key={index} className={`h-11 flex flex-row items-center px-3 border-b border-blue-100 ${index % 2 === 0 ? 'bg-blue-50' : ''}`}>
                <SnapCheckboxButton input-name="check-contact"></SnapCheckboxButton>
                {/* <img src={contact.image} alt="contact" className="w-[32px] h-[32px] rounded-[50%] mx-1" /> */}
                <p className="text-sm font-medium text-gray-800">{contact.name}</p>
                <p className="text-xs font-medium text-gray-500 mx-1">-</p>
                <p className="text-xs font-medium text-gray-500">{contact.program}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default ContactSelector;
