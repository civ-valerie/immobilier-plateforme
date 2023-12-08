export const LoginPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded">
        {/* Your login form goes here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginPopup();
