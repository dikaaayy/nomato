import { FormEvent, useContext, useRef, useState } from "react";
import Toast from "../../Toast";
import RatingForm from "./RatingForm";
import Backdrop from "../../login/Backdrop";
import { ReviewContext } from "../../../pages/restos/[routeName]";

const stars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

export default function CreateRating({ cancel, restaurant, session }: any) {
  const { id: restaurantId, name, locationBroad } = restaurant;
  const [currentRate, setCurrentRate] = useState(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const toastRef = useRef<any>(null);
  const { setReviews } = useContext(ReviewContext);

  const submitRating = (e: FormEvent) => {
    e.preventDefault();
    if (!currentRate) return;
    toastRef.current!.show();
    // fetch("https://dummyjson.com/products/1").then(() => {
    //   setCurrentRate(null);
    //   commentRef.current!.value = "";
    //   // cancel();
    // });
    fetch(`${process.env.NEXT_PUBLIC_API_URL!}/api/postReview`, {
      body: JSON.stringify({
        restaurantId,
        rate: Number(currentRate),
        email: session?.user?.email!,
        comment: commentRef.current!.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then(() => {
      setReviews((prev: any) => [
        ...prev,
        {
          rate: Number(currentRate),
          comment: commentRef.current!.value,
          user: {
            image: session?.user?.image,
            name: session?.user?.name,
          },
        },
      ]);
      setTimeout(() => {
        cancel();
        // toastRef.current!.show();
        setCurrentRate(null);
        commentRef.current!.value = "";
      }, 900);
    });
  };
  return (
    <Backdrop onClick={cancel}>
      <div
        className="fixed z-[30] animate-loginFade bg-white h-[55vh] bottom-0 w-screen rounded-t-2xl pt-4"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="text-center">
          <p className="font-bold text-xl">{name}</p>
          <p>{locationBroad}</p>
        </div>
        <hr className="border-2 my-4" />
        <div className="mx-4 mt-8 space-y-10">
          <div className="flex flex-col space-y-2">
            <p className="font-semibold">Mau kasih bintang berapa?</p>
            <div className="flex space-x-1 mb-2 self-center">
              {stars.map((item: any, i: number) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      if (currentRate === 1 && currentRate === item.id) setCurrentRate(null);
                      if (currentRate === item.id) return;
                      setCurrentRate(item.id);
                    }}
                  >
                    {
                      // @ts-ignore: Object is possibly 'null'.
                      currentRate >= item.id ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#F7C645]">
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-black">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      )
                    }
                  </div>
                );
              })}
            </div>
          </div>
          <RatingForm commentRef={commentRef} submitRating={submitRating} session={session} />
        </div>
        <Toast message={"Review posted!"} ref={toastRef} />
      </div>
    </Backdrop>
  );
}
