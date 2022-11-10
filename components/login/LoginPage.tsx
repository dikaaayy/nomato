import React, { FormEvent, useRef } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import Backdrop from "./Backdrop";
import Header from "../Head/Header";
import LoginForm from "./LoginForm";
import Navbar from "../Navbar/Navbar";
import { useRouter } from "next/router";

export default function LoginPage({ closeLogin }: any) {
  const { data: session } = useSession();
  const router = useRouter();
  const loginInput = useRef<HTMLInputElement>(null);

  const emailSubmit = (e: FormEvent) => {
    e.preventDefault();
    const email = loginInput.current!.value;
    signIn("email", { email, callbackUrl: window.location.origin, redirect: false });
    router.push("/login?success=true", undefined, { shallow: true });
  };
  if (router.query.success) {
    return (
      <>
        <Header title={"Login"} />
        <div className="animate-loginFade bg-white h-[75vh] w-screen rounded-t-2xl pt-4 flex flex-col items-center justify-center gap-y-5 fixed bottom-0">
          <svg width="201" height="200" viewBox="0 0 201 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M174.93 113.42C177.2 109.11 178.5 104.21 178.5 99C178.5 85.758 170.182 74.486 158.498 70.044C158.498 70.03 158.5 70.016 158.5 70C158.5 46.804 139.696 28 116.5 28C96.932 28 80.538 41.402 75.874 59.514C72.922 58.544 69.776 58 66.5 58C51.116 58 38.454 69.586 36.72 84.504C26.312 86.706 18.5 95.938 18.5 107C18.5 119.702 28.798 130 41.5 130C41.854 130 42.204 129.976 42.552 129.956C42.544 130.306 42.5 130.648 42.5 131C42.5 153.644 60.856 172 83.5 172C96.374 172 107.85 166.056 115.368 156.772C119.724 161.222 125.78 164 132.5 164C141.8 164 149.848 158.7 153.832 150.964C155.936 151.634 158.174 152 160.5 152C172.65 152 182.5 142.15 182.5 130C182.5 123.378 179.56 117.454 174.93 113.42Z"
              fill="#FDEAEA"
            />
            <path
              d="M131.5 75V76H125.5V75C125.5 75 117.016 75 114.5 75C109.53 75 105.5 70.97 105.5 66C105.5 61.334 109.064 57.542 113.61 57.09C113.566 56.728 113.5 56.374 113.5 56C113.5 51.03 117.53 47 122.5 47C125.376 47 127.906 48.372 129.554 50.472C129.834 45.2 134.158 41 139.5 41C145.022 41 149.5 45.478 149.5 51C149.5 51.892 149.346 52.74 149.126 53.564C150.41 52.01 152.326 51 154.5 51C158.062 51 160.968 53.67 161.41 57.11C161.772 57.066 162.126 57 162.5 57C167.47 57 171.5 61.03 171.5 66C171.5 70.97 167.47 75 162.5 75C157.53 75 143.5 75 143.5 75H131.5Z"
              fill="#F7BFBF"
            />
            <path
              d="M139.5 40C145.566 40 150.5 44.934 150.5 51C150.5 51.032 150.5 51.062 150.5 51.094C151.704 50.384 153.08 50 154.5 50C158.162 50 161.322 52.522 162.216 56.01C162.31 56.004 162.404 56 162.5 56C168.014 56 172.5 60.486 172.5 66C172.5 71.514 168.014 76 162.5 76H131.5C130.948 76 130.5 75.552 130.5 75C130.5 74.448 130.948 74 131.5 74H162.5C166.912 74 170.5 70.412 170.5 66C170.5 61.588 166.912 58 162.5 58C162.266 58 162.04 58.034 161.814 58.064L161.532 58.102C161.49 58.108 161.45 58.11 161.408 58.11C160.916 58.11 160.484 57.74 160.418 57.236C160.036 54.25 157.492 52 154.5 52C152.73 52 151.054 52.802 149.898 54.2C149.702 54.436 149.416 54.564 149.126 54.564C148.97 54.564 148.814 54.528 148.67 54.452C148.252 54.238 148.042 53.76 148.162 53.306C148.392 52.436 148.5 51.704 148.5 51C148.5 46.038 144.462 42 139.5 42C134.738 42 130.806 45.744 130.552 50.526C130.53 50.942 130.252 51.3 129.854 51.426C129.754 51.458 129.652 51.474 129.55 51.474C129.25 51.474 128.958 51.336 128.766 51.09C127.224 49.126 124.942 48 122.5 48C118.088 48 114.5 51.588 114.5 56C114.5 56.234 114.534 56.46 114.564 56.686L114.602 56.968C114.634 57.236 114.558 57.504 114.39 57.714C114.222 57.924 113.976 58.058 113.71 58.084C109.598 58.494 106.5 61.898 106.5 66C106.5 70.412 110.088 74 114.5 74H125.5C126.052 74 126.5 74.448 126.5 75C126.5 75.552 126.052 76 125.5 76H114.5C108.986 76 104.5 71.514 104.5 66C104.5 61.206 107.878 57.174 112.506 56.246C112.502 56.164 112.5 56.082 112.5 56C112.5 50.486 116.986 46 122.5 46C124.852 46 127.086 46.832 128.866 48.328C130.062 43.52 134.39 40 139.5 40Z"
              fill="#472B29"
            />
            <path d="M39.5 86H19.5C18.948 86 18.5 85.552 18.5 85C18.5 84.448 18.948 84 19.5 84H39.5C40.052 84 40.5 84.448 40.5 85C40.5 85.552 40.054 86 39.5 86Z" fill="#611515" />
            <path d="M55.482 90H37.5C36.948 90 36.5 89.552 36.5 89C36.5 88.448 36.948 88 37.5 88H55.482C56.034 88 56.482 88.448 56.482 89C56.482 89.552 56.034 90 55.482 90Z" fill="#611515" />
            <path d="M33.5 90H31.5C30.948 90 30.5 89.552 30.5 89C30.5 88.448 30.948 88 31.5 88H33.5C34.052 88 34.5 88.448 34.5 89C34.5 89.552 34.054 90 33.5 90Z" fill="#611515" />
            <path d="M45.5 80C45.146 80 35.854 80 35.5 80C34.948 80 34.5 80.448 34.5 81C34.5 81.552 34.948 82 35.5 82C35.854 82 45.146 82 45.5 82C46.052 82 46.5 81.552 46.5 81C46.5 80.448 46.052 80 45.5 80Z" fill="#611515" />
            <path
              d="M128.5 56H72.5C63.66 56 56.5 63.16 56.5 72V128C56.5 130.8 57.22 133.44 58.5 135.72C59.9 138.28 61.98 140.4 64.5 141.84C65.14 142.22 65.8 142.56 66.5 142.84C68.36 143.58 70.38 144 72.5 144H128.5C129.18 144 129.84 143.96 130.5 143.88C132.66 143.6 134.7 142.9 136.5 141.84C137.2 141.46 137.88 141 138.5 140.48C142.16 137.56 144.5 133.06 144.5 128V72C144.5 63.16 137.34 56 128.5 56Z"
              fill="white"
            />
            <path d="M45.5 86H43.5C42.948 86 42.5 85.552 42.5 85C42.5 84.448 42.948 84 43.5 84H45.5C46.052 84 46.5 84.448 46.5 85C46.5 85.552 46.054 86 45.5 86Z" fill="#611515" />
            <path d="M39.5 94H35.5C34.948 94 34.5 93.552 34.5 93C34.5 92.448 34.948 92 35.5 92H39.5C40.052 92 40.5 92.448 40.5 93C40.5 93.552 40.052 94 39.5 94Z" fill="#611515" />
            <path d="M45.5 76C45.146 76 43.854 76 43.5 76C42.948 76 42.5 76.448 42.5 77C42.5 77.552 42.948 78 43.5 78C43.854 78 45.146 78 45.5 78C46.052 78 46.5 77.552 46.5 77C46.5 76.448 46.052 76 45.5 76Z" fill="#611515" />
            <path d="M55.5 84C55.146 84 49.854 84 49.5 84C48.948 84 48.5 84.448 48.5 85C48.5 85.552 48.948 86 49.5 86C49.854 86 55.146 86 55.5 86C56.052 86 56.5 85.552 56.5 85C56.5 84.448 56.052 84 55.5 84Z" fill="#611515" />
            <path
              d="M128.5 58C136.22 58 142.5 64.28 142.5 72V128C142.5 132.278 140.588 136.256 137.214 138.948C136.702 139.378 136.14 139.76 135.484 140.116C133.894 141.052 132.13 141.652 130.258 141.894C129.674 141.966 129.098 142 128.5 142H72.5C70.708 142 68.938 141.658 67.242 140.984C66.688 140.762 66.124 140.48 65.492 140.104C63.288 138.846 61.478 136.998 60.244 134.742C59.104 132.708 58.5 130.378 58.5 128V72C58.5 64.28 64.78 58 72.5 58H128.5ZM128.5 56H72.5C63.66 56 56.5 63.16 56.5 72V128C56.5 130.8 57.22 133.44 58.5 135.72C59.9 138.28 61.98 140.4 64.5 141.84C65.14 142.22 65.8 142.56 66.5 142.84C68.36 143.58 70.38 144 72.5 144H128.5C129.18 144 129.84 143.96 130.5 143.88C132.66 143.6 134.7 142.9 136.5 141.84C137.2 141.46 137.88 141 138.5 140.48C142.16 137.56 144.5 133.06 144.5 128V72C144.5 63.16 137.34 56 128.5 56Z"
              fill="#472B29"
            />
            <path
              d="M128.5 58.8C135.778 58.8 141.7 64.722 141.7 72V128C141.7 135.278 135.778 141.2 128.5 141.2H72.5C65.222 141.2 59.3 135.278 59.3 128V72C59.3 64.722 65.222 58.8 72.5 58.8H128.5ZM128.5 56H72.5C63.664 56 56.5 63.164 56.5 72V128C56.5 136.836 63.664 144 72.5 144H128.5C137.336 144 144.5 136.836 144.5 128V72C144.5 63.164 137.336 56 128.5 56Z"
              fill="#472B29"
            />
            <path
              d="M125.758 138.572H74.174C67.578 138.572 62.212 133.206 62.212 126.61V75.026C62.212 68.43 67.578 63.064 74.174 63.064H123.296C123.682 63.064 123.996 63.378 123.996 63.764C123.996 64.15 123.682 64.464 123.296 64.464H74.174C68.35 64.464 63.612 69.202 63.612 75.026V126.61C63.612 132.434 68.35 137.172 74.174 137.172H125.758C131.582 137.172 136.318 132.434 136.318 126.61V98.072C136.318 97.686 136.632 97.372 137.018 97.372C137.404 97.372 137.718 97.686 137.718 98.072V126.608C137.72 133.204 132.354 138.572 125.758 138.572ZM137.02 94.656C136.634 94.656 136.32 94.342 136.32 93.956V88.466C136.32 88.08 136.634 87.766 137.02 87.766C137.406 87.766 137.72 88.08 137.72 88.466V93.956C137.72 94.342 137.406 94.656 137.02 94.656ZM137.02 86.422C136.634 86.422 136.32 86.108 136.32 85.722V82.976C136.32 82.59 136.634 82.276 137.02 82.276C137.406 82.276 137.72 82.59 137.72 82.976V85.722C137.72 86.108 137.406 86.422 137.02 86.422Z"
              fill="#472B29"
            />
            <path
              d="M111.776 86.248C111.722 86.396 111.084 88.208 110.44 91.224C107.694 87.84 103.686 85.692 99.216 85.692C90.96 85.692 84.24 92.986 84.24 101.95C84.24 110.914 90.958 118.208 99.216 118.208C103.758 118.208 107.826 115.994 110.574 112.514C111.156 113.754 111.902 114.82 112.816 115.7C115.34 118.126 118.18 118.226 118.78 118.208C125.868 118.192 130.448 111.814 130.448 101.95C130.45 85.436 117.014 72 100.5 72C83.986 72 70.55 85.436 70.55 101.95C70.55 118.464 83.986 131.902 100.5 131.902C106.63 131.902 114.556 131.19 121.5 125.634L118.292 121.624C113.848 125.18 108.36 126.766 100.5 126.766C86.816 126.766 75.684 115.634 75.684 101.95C75.684 88.266 86.816 77.134 100.5 77.134C114.184 77.134 125.316 88.266 125.316 101.95C125.316 103.808 125 113.074 118.71 113.076C118.248 113.072 114.192 112.798 114.192 104.518C114.192 94.874 116.584 88.052 116.606 87.988L111.776 86.248ZM99.216 113.076C93.79 113.076 89.376 108.086 89.376 101.952C89.376 95.818 93.79 90.828 99.216 90.828C104.642 90.828 109.056 95.818 109.056 101.952C109.058 108.084 104.642 113.076 99.216 113.076Z"
              fill="#952525"
            />
            <path
              d="M73.5 149C73.5 149 76.634 149 80.5 149C84.366 149 87.5 145.866 87.5 142C87.5 138.438 84.83 135.532 81.39 135.09C81.446 134.732 81.5 134.374 81.5 134C81.5 130.134 78.366 127 74.5 127C72.436 127 70.6 127.91 69.32 129.33C68.552 125.714 65.346 123 61.5 123C57.082 123 53.5 126.582 53.5 131C53.5 131.382 53.56 131.748 53.612 132.116C52.756 131.428 51.684 131 50.5 131C48.044 131 46.01 132.774 45.59 135.11C45.232 135.054 44.874 135 44.5 135C40.634 135 37.5 138.134 37.5 142C37.5 145.866 40.634 149 44.5 149C48.366 149 59.5 149 59.5 149V150H73.5V149Z"
              fill="#F7BFBF"
            />
            <path
              d="M77 140C76.724 140 76.5 139.776 76.5 139.5C76.5 137.054 78.49 135.064 80.936 135.064C81.004 135.082 82.41 135.062 83.424 135.336C83.69 135.408 83.848 135.682 83.776 135.948C83.704 136.216 83.43 136.374 83.164 136.3C82.276 136.06 80.964 136.06 80.938 136.064C79.042 136.064 77.5 137.606 77.5 139.5C77.5 139.776 77.276 140 77 140Z"
              fill="#472B29"
            />
            <path d="M63.5 150C64.0523 150 64.5 149.552 64.5 149C64.5 148.448 64.0523 148 63.5 148C62.9477 148 62.5 148.448 62.5 149C62.5 149.552 62.9477 150 63.5 150Z" fill="#472B29" />
            <path
              d="M80.5 150H73.5C72.948 150 72.5 149.552 72.5 149C72.5 148.448 72.948 148 73.5 148H80.5C83.808 148 86.5 145.308 86.5 142C86.5 139.008 84.25 136.464 81.264 136.082C80.996 136.046 80.754 135.906 80.592 135.69C80.43 135.474 80.362 135.202 80.404 134.936C80.45 134.628 80.5 134.32 80.5 134C80.5 130.692 77.808 128 74.5 128C72.8 128 71.224 128.71 70.062 130C69.812 130.278 69.42 130.396 69.062 130.296C68.698 130.198 68.42 129.906 68.342 129.538C67.66 126.33 64.782 124 61.5 124C57.64 124 54.5 127.14 54.5 131C54.5 131.286 54.542 131.56 54.582 131.836C54.64 132.242 54.456 132.712 54.098 132.916C53.74 133.12 53.306 133.152 52.986 132.896C52.256 132.31 51.398 132 50.5 132C48.568 132 46.916 133.382 46.574 135.288C46.478 135.822 45.982 136.18 45.436 136.098C45.128 136.05 44.82 136 44.5 136C41.192 136 38.5 138.692 38.5 142C38.5 145.308 41.192 148 44.5 148H59.5C60.052 148 60.5 148.448 60.5 149C60.5 149.552 60.052 150 59.5 150H44.5C40.088 150 36.5 146.412 36.5 142C36.5 137.588 40.088 134 44.5 134C44.618 134 44.732 134.004 44.848 134.012C45.676 131.64 47.922 130 50.5 130C51.198 130 51.878 130.122 52.522 130.36C52.852 125.694 56.752 122 61.5 122C65.162 122 68.432 124.254 69.806 127.548C71.166 126.552 72.81 126 74.5 126C78.912 126 82.5 129.588 82.5 134C82.5 134.096 82.498 134.19 82.492 134.284C85.978 135.18 88.5 138.338 88.5 142C88.5 146.412 84.912 150 80.5 150Z"
              fill="#472B29"
            />
            <path
              d="M69.5 148C69.182 148 67.818 148 67.5 148C66.948 148 66.5 148.448 66.5 149C66.5 149.552 66.948 150 67.5 150C67.818 150 69.182 150 69.5 150C70.052 150 70.5 149.552 70.5 149C70.5 148.448 70.052 148 69.5 148Z"
              fill="#472B29"
            />
            <path d="M169.5 134H149.5C148.948 134 148.5 133.552 148.5 133C148.5 132.448 148.948 132 149.5 132H169.5C170.052 132 170.5 132.448 170.5 133C170.5 133.552 170.054 134 169.5 134Z" fill="#611515" />
            <path d="M175.5 134H173.5C172.948 134 172.5 133.552 172.5 133C172.5 132.448 172.948 132 173.5 132H175.5C176.052 132 176.5 132.448 176.5 133C176.5 133.552 176.054 134 175.5 134Z" fill="#611515" />
            <path d="M185.482 138H167.5C166.948 138 166.5 137.552 166.5 137C166.5 136.448 166.948 136 167.5 136H185.482C186.034 136 186.482 136.448 186.482 137C186.482 137.552 186.034 138 185.482 138Z" fill="#611515" />
            <path d="M163.5 138H161.5C160.948 138 160.5 137.552 160.5 137C160.5 136.448 160.948 136 161.5 136H163.5C164.052 136 164.5 136.448 164.5 137C164.5 137.552 164.054 138 163.5 138Z" fill="#611515" />
            <path d="M157.5 138H153.5C152.948 138 152.5 137.552 152.5 137C152.5 136.448 152.948 136 153.5 136H157.5C158.052 136 158.5 136.448 158.5 137C158.5 137.552 158.054 138 157.5 138Z" fill="#611515" />
            <path d="M169.5 142H165.5C164.948 142 164.5 141.552 164.5 141C164.5 140.448 164.948 140 165.5 140H169.5C170.052 140 170.5 140.448 170.5 141C170.5 141.552 170.052 142 169.5 142Z" fill="#611515" />
            <path
              d="M175.5 124C175.146 124 173.854 124 173.5 124C172.948 124 172.5 124.448 172.5 125C172.5 125.552 172.948 126 173.5 126C173.854 126 175.146 126 175.5 126C176.052 126 176.5 125.552 176.5 125C176.5 124.448 176.052 124 175.5 124Z"
              fill="#611515"
            />
            <path
              d="M175.5 128C175.146 128 165.854 128 165.5 128C164.948 128 164.5 128.448 164.5 129C164.5 129.552 164.948 130 165.5 130C165.854 130 175.146 130 175.5 130C176.052 130 176.5 129.552 176.5 129C176.5 128.448 176.052 128 175.5 128Z"
              fill="#611515"
            />
            <path
              d="M185.5 132C185.146 132 179.854 132 179.5 132C178.948 132 178.5 132.448 178.5 133C178.5 133.552 178.948 134 179.5 134C179.854 134 185.146 134 185.5 134C186.052 134 186.5 133.552 186.5 133C186.5 132.448 186.052 132 185.5 132Z"
              fill="#611515"
            />
          </svg>

          <p className="text-darkGray text-2xl font-semibold">Cek email kamu!</p>
          <p className="text-darkGray text-center text-opacity-70 px-7">Link sign in telah terkirim ke email yang kamu isi sebelumnya</p>
        </div>
        <Navbar />
      </>
    );
  }
  return (
    <>
      <Header title={"Login"} />
      <div className="animate-loginFade bg-white h-[75vh] w-screen rounded-t-2xl pt-4 flex flex-col gap-y-5 fixed bottom-0 border-2">
        <div className="text-center">
          <p className="font-semibold text-xl text-darkGray">Masuk</p>
          <p className="text-darkGray text-opacity-70">Silahkan isi email aktif kamu</p>
        </div>
        <LoginForm loginInputRef={loginInput} onSubmit={emailSubmit} />
        <div className="flex items-center justify-evenly my-5">
          <hr className="border-t-[4px] w-1/4" />
          <p className="font-medium text-darkGray text-opacity-80">atau gunakan akun</p>
          <hr className="border-t-[4px] w-1/4" />
        </div>
        <div className="flex items-center justify-around">
          <button className="px-3 py-1 border-[1px] rounded" onClick={() => signIn("google")}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_674_21159)">
                <g clipPath="url(#clip0_674_21159)">
                  <path d="M33.766 22.2765C33.766 21.4608 33.6999 20.6406 33.5588 19.8381H22.24V24.4591H28.7217C28.4528 25.9495 27.5885 27.2679 26.323 28.1056V31.104H30.19C32.4608 29.014 33.766 25.9274 33.766 22.2765Z" fill="#4285F4" />
                  <path
                    d="M22.24 34.0008C25.4764 34.0008 28.2058 32.9382 30.1944 31.1039L26.3274 28.1055C25.2516 28.8375 23.8626 29.252 22.2444 29.252C19.1138 29.252 16.4593 27.1399 15.5069 24.3003H11.5165V27.3912C13.5536 31.4434 17.7028 34.0008 22.24 34.0008V34.0008Z"
                    fill="#34A853"
                  />
                  <path d="M15.5025 24.3002C14.9999 22.8099 14.9999 21.196 15.5025 19.7057V16.6147H11.5165C9.81449 20.0055 9.81449 24.0004 11.5165 27.3912L15.5025 24.3002V24.3002Z" fill="#FBBC04" />
                  <path
                    d="M22.24 14.7497C23.9508 14.7232 25.6043 15.367 26.8433 16.5487L30.2694 13.1226C28.1 11.0855 25.2207 9.96553 22.24 10.0008C17.7028 10.0008 13.5536 12.5582 11.5165 16.6148L15.5025 19.7058C16.4505 16.8617 19.1094 14.7497 22.24 14.7497V14.7497Z"
                    fill="#EA4335"
                  />
                </g>
              </g>
              <defs>
                <filter id="filter0_d_674_21159" x="-2" y="-1" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_674_21159" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_674_21159" result="shape" />
                </filter>
                <clipPath id="clip0_674_21159">
                  <rect width="24" height="24" fill="white" transform="translate(10 10)" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <Navbar />
    </>
  );
}
