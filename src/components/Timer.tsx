import { useEffect, useRef, useState } from "react";

type TimeArgs = {
  milisegundos: number;
};

export const Timer = ({ milisegundos }: TimeArgs) => {
  const [segundos, setSegundos] = useState(0);

  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);

    console.log("useEffect");
    ref.current = setTimeout(() => setSegundos(segundos + 1), milisegundos);
  }, [segundos, milisegundos]);

  return (
    <>
      <h4>
        Timer: <small>{segundos}</small>
      </h4>
    </>
  );
};
