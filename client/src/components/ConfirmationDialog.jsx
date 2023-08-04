const ConfirmationDialog = ({ setConfirmation, setIsOpen }) => {
  return (
    <div>
      <div className="confirmation-dialog-inner">
        <h2>Are you sure you want to delete this post?</h2>
        <div className="confirmation-dialog-buttons">
          <button
            className="confirmation-dialog-button confirmation-dialog-button-cancel"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Cancel
          </button>
          <button
            className="confirmation-dialog-button confirmation-dialog-button-delete"
            onClick={() => {
              setIsOpen(false);
              setConfirmation(true);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
