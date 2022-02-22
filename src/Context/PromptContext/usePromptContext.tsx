import React, { createContext, useCallback, useContext, useState } from "react";

import Style from "./Style.module.scss";

export const PromptContext = createContext<{
  prompt?: (FunctionalComponent: React.FC<PromptProps>) => Promise<unknown>;
}>({});

export type PromptProps = {
  onClose: () => void;
};

export type Prompt = {
  id: number;
  Component: React.FC;
};

export const PromptProvider: React.FC = ({ children }) => {
  const [Prompts, setPrompts] = useState<Array<Prompt>>([]);

  const prompt = useCallback(
    async (FunctionalComponent: React.FC<PromptProps>) => {
      return new Promise(() => {
        setPrompts(prev => {
          if (prev.length) {
            prev = [];
          }
          const newId = (prev[prev.length - 1]?.id || 0) + 1;

          const onClose = () => {
            setPrompts(prevPromt =>
              prevPromt.filter(promptItem => promptItem.id !== newId)
            );
          };

          return [
            ...prev,
            {
              id: newId,
              Component: () => (
                <div className={Style.promptContainer} onClick={onClose}>
                  <FunctionalComponent onClose={onClose} />
                </div>
              )
            }
          ];
        });
      });
    },
    []
  );

  return (
    <PromptContext.Provider value={{ prompt }}>
      {children}
      {Prompts.map((Prompt, i) => (
        <Prompt.Component key={i} />
      ))}
    </PromptContext.Provider>
  );
};

const usePromptContext = () => {
  const context = useContext(PromptContext);

  return context.prompt as <T>(
    FunctionalComponent: React.FC<PromptProps>
  ) => Promise<T>;
};

export default usePromptContext;
