import "../styles/globals.css";
import { SwitchTransition, Transition } from "react-transition-group";
import { gsap } from "gsap";
import { Header, Footer } from "../modules/core";
import ModalWrapper from "../modules/overlay/modal";
import SidebarWrapper from "../modules/overlay/sidebar";
import { ManagedUIContext } from "../modules/context";
function MyApp({ Component, pageProps, router }) {
  return (
    <ManagedUIContext>
      <ModalWrapper>
        <Header />
        <SidebarWrapper>
          <SwitchTransition>
            <Transition
              appear={true}
              key={router.pathname}
              in={true}
              timeout={500}
              onExit={exit}
              onEnter={enter}
              mountOnEnter
              unmountOnExit
            >
              <Component {...pageProps} />
            </Transition>
          </SwitchTransition>
          <Footer />
        </SidebarWrapper>
      </ModalWrapper>
    </ManagedUIContext>
  );
}

export default MyApp;

function exit(node) {
  gsap.to(node, {
    duration: 0.3,
    yPercent: 2,
    opacity: 0,
  });
}

function enter(node) {
  gsap.fromTo(
    node,
    {
      duration: 0.3,
      yPercent: 2,
      opacity: 0,
    },
    {
      yPercent: 0,
      opacity: 1,
    }
  );
}
