import React from 'react';
import { SnapButton, SnapInput, SnapLink } from '../../suit';
import ContactSelector from '../ContactSelector';
import { ContactInformation } from '../ContactTypes';
import SimpleModal from './SimpleModal';

interface ContactModalProps {
  showModal: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  subject?: string;
  message?: string;
  contacts?: ContactInformation[]; 
  //email list (img, name, email, etc)
}

const ContactModal: React.FC<ContactModalProps> = ({ showModal, onClose, title = '', description = '', subject = '', message = '', contacts = [] }) => {
  return (
    <SimpleModal
      showModal={showModal}
      onClose={onClose}
      hideHeader
    >
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800 pb-2">{title}</h4>
        <p className="text-base font-normal text-gray-800 pb-4">{description}</p>
        <ContactSelector 
          contactList={contacts}
        />
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <div className="pb-4">
            <SnapInput
              textarea={false}
              label="Subject"
              _id="input-subject"
              name="subject"
              _type="text"
              placeholder="Type subject.."
              value={subject}
            >
            </SnapInput>
          </div>
          <div className="mb-6">
            <SnapInput
              textarea={true}
              label="Email Message"
              _id="input-email-message"
              name="email-message"
              _type="text"
              placeholder="Type email message.."
              value={message}
            >
            </SnapInput>
          </div>
          <div className="flex justify-end">
            <SnapLink text="Cancel" onClick={onClose} size="sm"></SnapLink>
            <SnapButton 
              size="md"
              variant="primary"
              className="ml-12"
              onClick={onClose}
            >
              Send Email
            </SnapButton>
          </div>
        </form>
      </div>
    </SimpleModal>
  );
};

export default ContactModal;
