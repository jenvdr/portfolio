import React, { createContext, useContext, useRef } from 'react';

const SectionContext = createContext({});

export const SectionProvider = ({ children }) => {
  const sectionsRef = useRef({
    footer: null,
    contact: null,
  });

  return (
    <SectionContext.Provider value={sectionsRef}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = (sectionName) => {
  const sectionsRef = useContext(SectionContext);
  if (!sectionsRef.current[sectionName]) {
    sectionsRef.current[sectionName] = React.createRef();
  }
  return sectionsRef.current[sectionName];
};
