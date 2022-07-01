import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useReducer,
} from "react";

const initialState = {
  overlayView: null,
  isModal: false,
  isSidebar: false,
};

export const UIContext = createContext(initialState);

function uiReducer(state, { type, payload }) {
  switch (type) {
    case "MOUNT": {
      if (payload.split("_").includes("MODAL")) {
        return { ...state, isModal: true, overlayView: payload };
      } else if (payload.split("_").includes("SIDEBAR")) {
        return { ...state, isSidebar: true, overlayView: payload };
      }
    }
    case "UNMOUNT": {
      return { ...state, isModal: false, isSidebar: false, overlayView: null };
    }
    default: {
      return state;
    }
  }
}

const UIContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);
  const mountModal = useCallback(
    (target) => dispatch({ type: "MOUNT", payload: target }),
    []
  );
  const mountSidebar = useCallback((target) => {
    console.log(target);
    dispatch({ type: "MOUNT", payload: target });
  }, []);
  const unmountOverlay = useCallback(() => {
    dispatch({ type: "UNMOUNT" });
  }, []);

  const stateValue = useMemo(
    () => ({
      ...state,
      mountModal,
      mountSidebar,
      unmountOverlay,
    }),
    [state, mountModal, mountSidebar, unmountOverlay]
  );
  return <UIContext.Provider value={stateValue}>{children}</UIContext.Provider>;
};

export const useUIContext = () => {
  const context = useContext(UIContext);
  if (context !== undefined) {
    return context;
  }
};
export const ManagedUIContext = ({ children }) => {
  return <UIContextProvider>{children}</UIContextProvider>;
};

/*

 const toogleSidebar = useCallback(
    () => dispatch({ type: "TOGGLE_SIDEBAR" }),
    []
  );

  const setSidebar = useCallback((view) => {
    if (sidebarTypes.includes(view)) {
      dispatch({ type: "SET_SIDERBAR", payload: view });
    }
  }, []);
  const setModal = useCallback((view) => {
    if (modalTypes.includes(view)) {
      dispatch({ type: "SET_MODAL", payload: view });
    }
  }, []); 


*/
