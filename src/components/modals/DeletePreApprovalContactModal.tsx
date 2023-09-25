import { SnapButton, SnapIcon, SnapModal } from "../../suit";


interface DeletePreApprovalContactProps{
    onClose: () => void;
    onDelete: () => void;
}

const DeletePreApprovalContactModal: React.FC<DeletePreApprovalContactProps> = ({
    onClose,
    onDelete
  }) => {

    return(
        <>
        <SnapModal prompt={true} onSnap-modal-close={onClose}>
            <div className="flex flex-row justify-center pb-3">
                <SnapIcon icon="trash-solid" bgColor="#FEE2E2" state="rounded" size="xl" color="red"></SnapIcon>
            </div>
            <div className="flex flex-col justify-center text-center">
                <p className="font-medium text-base leading-7">Are you sure you want to delete this contact?</p>
                <p className="font-normal text-sm leading-5" style={{color:'#64748B'}}>Deleting contact will remove them from your pre-approvals list.</p>
            </div>
            <div className="pt-3">
                <SnapButton fullWidth variant="danger" size="lg" onClick={onDelete}>Delete Contact</SnapButton>
            </div>
            <div className="pt-4">
                <SnapButton fullWidth variant="tertiary" size="lg" onClick={onClose}>Cancel</SnapButton>
            </div>
        </SnapModal>
        </>
    )
  }

export default DeletePreApprovalContactModal