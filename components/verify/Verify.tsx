import React from "react";
import Backdrop from "../login/Backdrop";

export default function Verify({ close }: any) {
  return (
    <Backdrop onClick={close}>
      <div
        className="animate-loginFade bg-white h-[75vh] w-screen rounded-t-2xl pt-4 flex flex-col items-center justify-center gap-y-5 fixed bottom-0"
        onClick={(e: any) => {
          e.stopPropagation;
        }}
      >
        <p className="text-darkGray text-2xl text-center font-semibold px-5">Yuk isi namamu dan username-mu dulu!</p>
        <p className="text-darkGray text-center text-opacity-70 px-7">Klik di sini untuk mengisi nama dan username-mu</p>
      </div>
    </Backdrop>
  );
}
