import { AlertTriangle, Loader2 } from "lucide-react";
import * as S from "./CancelOrderModal.styles";

export default function CancelOrderModal({
  isOpen,
  onClose,
  onConfirm,
  orderId,
  isCancelling = false,
}) {
  if (!isOpen) return null;

  return (
    <S.Overlay onClick={() => !isCancelling && onClose()}>
      <S.ModalBox onClick={(e) => e.stopPropagation()}>
        <S.IconContainer>
          <AlertTriangle size={28} color="#e60000" />
        </S.IconContainer>

        <S.Title>Cancel Order</S.Title>
        <S.Message>
          Are you sure you want to cancel order #{orderId}?
          <br />
          This action will restore the items to inventory and initiate a refund if paid online.
        </S.Message>

        <S.ButtonGroup>
          <S.KeepButton
            type="button"
            onClick={onClose}
            disabled={isCancelling}
          >
            Keep Order
          </S.KeepButton>
          <S.ConfirmCancelButton
            type="button"
            onClick={onConfirm}
            disabled={isCancelling}
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
          >
            {isCancelling ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Cancelling...
              </>
            ) : (
              "Yes, Cancel"
            )}
          </S.ConfirmCancelButton>
        </S.ButtonGroup>
      </S.ModalBox>
    </S.Overlay>
  );
}

