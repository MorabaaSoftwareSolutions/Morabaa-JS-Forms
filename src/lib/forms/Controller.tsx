import React from "react";
import { FormServiceType } from "../elements";

type Props = {
  id: string;
  Component: React.FC<{
    value: string;
    error: string;
    setValue: (value: string) => void;
    setError: (error: string) => void;
    onSuccess: () => void;
  }>;
  formService: FormServiceType;
};

const Controller = ({ Component, formService, id }: Props) => {
  const [, render] = React.useState(0);

  const controller = React.useMemo(() => {
    const setToForm = formService?.set as any;
    let _controller = {
      id,
      value: formService?.get(id) ?? "",
      error: null as any,
      setValue: (value: string) => {
        _controller.value = value;
        setToForm({ id, value });
        controller.render();
      },
      setError: (error: string) => {
        if (_controller.error === error) return;
        _controller.error = error;
        controller.render();
      },
      onSuccess: () => {
        if (!_controller.error) return;
        _controller.error = null;
        controller.render();
      },
      render: () => render((prev) => prev + 1),
    };
    formService?.subscribe?.(_controller);
    return _controller;
  }, []);

  return <Component {...controller} />;
};

export default Controller;