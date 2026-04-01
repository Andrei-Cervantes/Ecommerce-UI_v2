import { Dialog, DialogContent } from "../ui/dialog";

interface NewProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewProductModal: React.FC<NewProductModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      {/* TODO: Add modal content */}
      <DialogContent className="w-full max-w-lg">asd</DialogContent>
    </Dialog>
  );
};

export default NewProductModal;
