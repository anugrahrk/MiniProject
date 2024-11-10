// import React from "react";
// import { useParams } from "react-router";
// import axios from "../../axios";

// const Verify = () => {
//   const { id, name } = useParams();

//   const verifyUser = () => {
//     axios
//       .post("/users/verify", { userId: id })
//       .then((res) => console.log({ res }))
//       .catch((error) => console.log({ error }));
//   };

//   const deleteUser = () => {
//     axios
//       .delete(`/users/delete/${id}`)
//       .then((res) => console.log({ res }))
//       .catch((error) => console.log({ error }));
//   };

//   return (
//     <div>
//       <button onClick={verifyUser} className="button-primary">
//         verify {name}
//       </button>

//       <button onClick={deleteUser} className="button-black">
//         delete {name}
//       </button>
//     </div>
//   );
// };

// export default Verify;





import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "../../axios";
import Modal from "react-modal"; // You'll need to install 'react-modal' or a similar package

const Verify = () => {
  const { id, name } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // This effect runs when the admin logs in
  useEffect(() => {
    setIsModalOpen(true); // Open the modal when the component mounts (on admin login)
  }, []);

  const verifyUser = () => {
    axios
      .post("/users/verify", { userId: id })
      .then((res) => {
        console.log({ res });
        setIsModalOpen(false); // Close modal after action
      })
      .catch((error) => console.log({ error }));
  };

  const deleteUser = () => {
    axios
      .delete(`/users/delete/${id}`)
      .then((res) => {
        console.log({ res });
        setIsModalOpen(false); // Close modal after action
      })
      .catch((error) => console.log({ error }));
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel="Verify User Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div>
        <h2>Verify User</h2>
        <p>Would you like to verify or delete {name}?</p>
        <button onClick={verifyUser} className="button-primary">
          Verify {name}
        </button>
        <button onClick={deleteUser} className="button-black">
          Delete {name}
        </button>
      </div>
    </Modal>
  );
};

export default Verify;
