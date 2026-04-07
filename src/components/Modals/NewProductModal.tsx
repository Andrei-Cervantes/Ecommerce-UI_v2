import NewProductForm from "../Forms/NewProductForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface NewProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewProductModal: React.FC<NewProductModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="w-full max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Add New Product
          </DialogTitle>
        </DialogHeader>
        <NewProductForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default NewProductModal;
