import { useState, Dispatch, SetStateAction } from "react";

interface ModalProps {
  title: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setMemberImg: Dispatch<SetStateAction<string>>;
  setMemberName: Dispatch<SetStateAction<string>>;
}

export default function CustomModal({
  title,
  setShowModal,
  setMemberImg,
  setMemberName,
}: ModalProps) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="mt-3 sm:flex">
            <div className="mt-2 text-start sm:ml-4 sm:text-left">
              <span className="mx-3 text-white bg-nct px-3 py-1.5 rounded-2xl text-sm font-bold">
                {title}
              </span>
              <div className="grid grid-cols-3">
                {[
                  [1, "마크"],
                  [2, "런쥔"],
                  [3, "제노"],
                  [4, "해찬"],
                  [5, "재민"],
                  [6, "천러"],
                  [7, "지성"],
                ].map((value, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setShowModal(false);
                      setMemberImg(`/images/nct-dream-${value[0]}.JPG`);
                      setMemberName(`${value[1]}`);
                    }}
                    className="flex flex-col items-center p-4 space-y-2 cursor-pointer justify-center"
                  >
                    <img
                      className="object-cover object-center rounded-md aspect-square"
                      src={`/images/nct-dream-${value[0]}.JPG`}
                    />
                    <p className="text-gray-900 text-sm font-semibold">{`${value[1]}`}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
