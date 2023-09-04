import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const usePortal = (targetId) => {
  const [portalContent, setPortalContent] = useState(null);
  const [portal, setPortal] = useState(null);

  useEffect(() => {
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      return;
    }

    if (!portalContent) {
      setPortal(null);
    }
    setPortal(createPortal(portalContent, targetElement));

    return () => {
      setPortal(null);
    };
  }, [portalContent, targetId]);

  return { portal, setPortalContent };
};

export default usePortal;
