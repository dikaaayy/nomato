import React, { useState } from "react";
import LoginPage from "../../login/LoginPage";

export default function RatingForm({ commentRef, submitRating, setImageUpload }: any) {
  const fileHandler = (e: any) => {
    if (!e.target.files && !e.target.files[0]) return;
    const maxAllowedSize = 2 * 1024 * 1024;
    if (e.target.files[0].size > maxAllowedSize) {
      e.target.value = "";
      return;
    }
    setImageUpload(e.target.files[0]);
  };
  return (
    <>
      <form className="rounded-md" onSubmit={submitRating}>
        <p className="font-semibold mb-2">Ceritain dong pengalaman kamu tadi</p>
        <textarea placeholder="Makannya enak, pelayannya oke, tapi berisik aja musiknya" className="outline-none rounded-md w-full p-4 border-2" ref={commentRef} spellCheck={false} />
        <input type="file" className="outline-none rounded-md w-full p-4 border-2 border-dashed" accept="image/*" onChange={fileHandler} />
        <button className=" bg-darkRed w-full py-3 rounded mt-5 text-white" type="submit">
          Kirim review
        </button>
      </form>
    </>
  );
}
