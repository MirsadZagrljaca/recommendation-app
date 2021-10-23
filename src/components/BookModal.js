import React from "react";
import ReactModal from "react-modal";

export default function BookModal({
  titles,
  authors,
  images,
  links,
  pageCount,
  closeModal,
}) {
  const modalStyle = {
    content: {
      position: "absolute",
      top: "15%",
      left: "15%",
      textAlign: "center",
      border: "1px solid black",
      margin: "15px",
    },
  };

  return (
    <div className="modal-container">
      <ReactModal
        className="modal"
        isOpen={true}
        onRequestClose={() => closeModal()}
        contentLabel="Book Modal"
        ariaHideApp={false}
        style={modalStyle}
      >
        <p className="modal-p">Recommended Book Is</p>
        <img src={images} alt="Book" />
        <p className="modal-title">{titles}</p>
        <p className="modal-author">{authors}</p>
        <p className="modal-count">Page Count: {pageCount}</p>
        <a href={links} target="_blank">
          Read This Book Online
        </a>
        <div>
          <button className="modal-button" onClick={() => closeModal()}>
            Close
          </button>
        </div>
      </ReactModal>
    </div>
  );
}
