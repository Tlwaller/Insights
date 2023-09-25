import { SnapButton, SnapIcon } from "../../suit";
import WhiteCard from "../WhiteCard";
import RoundedIcon from "../RoundedIcon";

interface ConfirmationModalProps {
  className: string;
  onClose: (choice: boolean) => void;
  promptType: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  className,
  onClose,
  promptType,
}) => {
  return (
    <div
      className={
        className +
        " bg-gray-900/25 bg-opacity-25 h-screen w-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
      }
      style={{ zIndex: 100003 }}
    >
      <WhiteCard className="flex flex-col items-center text-center w-96">
        <div className="flex justify-end items-start self-stretch">
          <div className="flex pl-0 justify-center items-start flex-grow">
            <RoundedIcon
              className="h-12 w-12 rounded-full"
              icon="exclamation-solid"
              colorName="red"
              hex="#EF4444"
              bg="bg-red-100"
            />
          </div>
          <SnapIcon
            onClick={() => onClose(false)}
            icon="x-solid"
            size="md"
            className="cursor-pointer text-gray-500 absolute"
          />
        </div>
        <h1 className="text-gray-900 font-medium text-lg leading-7 py-2">
          Are you sure you want to continue?
        </h1>
        <p className="text-gray-500 leading-5 pb-4">
          {promptType === "tabChange"
            ? "Changing your pre-approval invite method "
            : "Closing this window "}
          will delete your progress.
        </p>
        <SnapButton
          onClick={() => onClose(true)}
          fullWidth
          variant="danger"
          className="w-full pb-4"
        >
          Continue
        </SnapButton>
        <SnapButton onClick={() => onClose(false)} fullWidth className="w-full">
          Cancel
        </SnapButton>
      </WhiteCard>
    </div>
  );
};

export default ConfirmationModal;
