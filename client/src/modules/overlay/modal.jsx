import { useRef } from "react";
import { Transition } from "react-transition-group";
import { gsap } from "gsap";
import { useUIContext } from "../context";
import { SignUpForm, ForgotPwdForm, LogInForm } from "../../components/auth";
export default function PopUp({ children }) {
  const { isModal, overlayView } = useUIContext();
  let modalRef = useRef();

  const renderModal = () => {
    switch (overlayView) {
      case "FORGOT_PWD_MODAL": {
        return <ForgotPwdForm />;
      }
      case "SIGNUP_MODAL": {
        return <SignUpForm />;
      }
      case "LOGIN_MODAL": {
        return <LogInForm />;
      }
      default:
        return null;
    }
  };
  const modalAnimation = (node) => {
    const tl = gsap.timeline();
    tl.fromTo(
      node,
      { opacity: 0, zIndex: -1 },
      { opacity: 1, duration: 0.3, zIndex: 20 }
    );
    tl.fromTo(
      modalRef,
      {
        opacity: 0,
        yPercent: -20,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.3,
      }
    );
    return tl;
  };

  return (
    <>
      {children}
      <Transition
        in={isModal}
        timeout={500}
        mountOnEnter
        unmountOnExit
        onEnter={(node) => modalAnimation(node).play()}
        onExit={(node) => modalAnimation(node).reverse(0)}
      >
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[20] bg-black bg-opacity-40 flex justify-center items-center">
          <div
            ref={(el) => (modalRef = el)}
            className="my-auto min-h-[400px] rounded-md max-w-[35rem] bg-white mx-auto w-[95%]"
          >
            {renderModal()}
          </div>
        </div>
      </Transition>
    </>
  );
}
