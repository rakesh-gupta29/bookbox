import { useRef } from "react";
import { Transition } from "react-transition-group";
import { gsap } from "gsap";
import { useUIContext } from "../context";
import { CartSidebar } from "../../components/cart";
import { MobileNavBar } from "../../components/mobile";

export default function Sidebar({ children }) {
  const { isSidebar, overlayView } = useUIContext();
  let sidebarRef = useRef();

  const renderSidebar = () => {
    switch (overlayView) {
      case "CART_SIDEBAR": {
        return <CartSidebar />;
      }
      case "MOBILE_NAV_SIDEBAR": {
        return <MobileNavBar />;
      }
      default:
        return null;
    }
  };

  const sidebarAnimation = (node) => {
    const tl = gsap.timeline();
    tl.fromTo(
      node,
      { opacity: 0, zIndex: -1 },
      { opacity: 1, duration: 0.3, zIndex: 20 }
    );
    tl.fromTo(
      sidebarRef,
      { translateX: "100%" },
      { translateX: 0, duration: 0.4 }
    );
    return tl;
  };
  return (
    <>
      {children}
      <Transition
        in={isSidebar}
        timeout={500}
        mountOnEnter
        unmountOnExit
        onEnter={(node) => sidebarAnimation(node).play()}
        onExit={(node) => sidebarAnimation(node).reverse(0)}
      >
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[20] bg-black bg-opacity-40  flex justify-end ">
          <div
            ref={(el) => (sidebarRef = el)}
            className="w-full max-w-[35rem] bg-white h-full"
          >
            {renderSidebar()}
          </div>
        </div>
      </Transition>
    </>
  );
}
