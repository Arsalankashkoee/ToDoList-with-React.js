const Modal = ({ onClose, inputValue, onUpdate, changeHandler }) => {
  return (
    <>
      {/* backdrop */}
      <div
        className="bg-gray-200 fixed top-0 left-0 w-full h-full z-0 opacity-50 "
        onClick={onClose}
      ></div>
      {/* modal */}
      <div className="absolute left-96 bottom-1/2 ">
        <div className="bg-white top-1/2 w-64 h-44 rounded-lg shadow-lg p-3 z-10 border-2 border-gray-300 transition-all duration-75 ease-in-out ">
          <h2 className="text-center text-lg text-slate-700 mb-7">
            update title todo
          </h2>
          <input
            type="text"
            value={inputValue}
            onChange={changeHandler}
            placeholder="enter your new title ..."
            autoFocus
            className="border-2 border-violet-400 w-full focus:outline-none text-slate-700 rounded-lg px-3 py-1 shadow-lg mb-7"
          />
          <button
            className="w-full bg-green-200 rounded-lg shadow-lg text-green-900 py-1 "
            onClick={onUpdate}
          >
            update
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
