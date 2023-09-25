import { SnapButton, SnapIcon } from "../../suit";
import WhiteCard from "../WhiteCard";
import RoundedIcon from "../RoundedIcon";

interface InvitesSentModalProps {
  onClose: () => void;
  numForms: number;
}

const InvitesSentModal: React.FC<InvitesSentModalProps> = ({
  onClose,
  numForms,
}) => {
  return (
    <div
      className="bg-gray-900/25 bg-opacity-25 h-screen w-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
      style={{ zIndex: 100003 }}
    >
      <WhiteCard className="flex flex-col items-center text-center w-96">
        <div className="flex justify-end items-start self-stretch">
          <div className="flex pl-0 justify-center items-start flex-grow">
            <RoundedIcon
              className="h-12 w-12 rounded-full"
              icon="mail-solid"
              colorName="blue"
              hex="#3B82F6"
              bg="bg-blue-100"
            />
          </div>
          <SnapIcon
            onClick={onClose}
            icon="x-solid"
            size="md"
            className="cursor-pointer text-gray-500 absolute"
          />
        </div>
        <h1 className="text-gray-900 font-medium text-lg leading-7 py-2">
          Pre-Approvals Sent
        </h1>
        <p className="text-gray-500 leading-5 pb-4">
          You've sent {numForms} pre-approval
          {numForms > 1 ? " invites" : " invite"} to run fundraisers through
          Snap! Raise
        </p>
        <SnapButton onClick={onClose} fullWidth className="w-full">
          Close
        </SnapButton>
      </WhiteCard>
    </div>
  );
};

export default InvitesSentModal;
