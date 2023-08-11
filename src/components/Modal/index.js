function Modal({ open, onClose, children, className, close = false }) {
  return (
    <div
      onClick={onClose}
      className={`fixed z-[999] inset-0 flex justify-center items-center transition-colors text-[#1e2329] dark:text-textDarkMode ${className} ${
        open ? 'visible bg-black/30' : 'invisible'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white dark:bg-[#474d57] rounded-xl shadow p-6 transition-all ${
          open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      >
        {close && (
          <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg hover:text-primary">
            X
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

export default Modal;
