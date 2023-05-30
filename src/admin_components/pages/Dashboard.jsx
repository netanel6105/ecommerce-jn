import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../../services/services";
import { Modal } from "../../global/Modal";

const Dashboard = () => {
  const nav = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="overflow-hidden w-screen rounded-lg border border-gray-200 shadow-md m-5">
      <div className="bg-gray-800 flex p-4">
        <button
          onClick={() => {
            localStorage.removeItem(TOKEN_KEY);
            nav("/admin/login");
          }}
          className="text-white bg-red-700 rounded-full py-2 px-4 font-bold "
        >
          Logout
        </button>
      </div>



      <div className="h-screen w-full">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col items-center justify-center">
            <button className="bg-blue-600 rounded-full py-2 px-4" onClick={()=> setModalOpen(true)}>open modal</button>

            {modalOpen && (
              <Modal
              title={<div className="text-3xl">costum title</div>}
              onClose={()=> setModalOpen(false)}
              footer={
                <div className="flex gap-2 justify-end py-2">
                  <button className="bg-green-600 rounded-full py-1 px-3 font-bold" onClick={() => setModalOpen(false)}>
                    OK
                  </button>
                  <button className="bg-red-700 rounded-full py-1 px-2 font-bold" onClick={()=> setModalOpen(false)}>
                    Cancel
                  </button>

                </div>
              }
              >
                mlsgjld;k;g
                askhldf
              </Modal>
            )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
