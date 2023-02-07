import { useReducer } from "react";

const initialState = {
  contador: 10,
};

type ActionType =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "setCustom"; payload: number };

const constadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
      };

    case "decrementar":
      return {
        ...state,
        contador: state.contador - 1,
      };

    case "setCustom":
      return {
        ...state,
        contador: action.payload,
      };

    default:
      break;
  }

  return state;
};

export const ContadorRed = () => {
  const [contadorState, dispatch] = useReducer(constadorReducer, initialState);

  return (
    <>
      <h2>Contador: {contadorState.contador}</h2>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "incrementar" })}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "decrementar" })}
      >
        -1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "setCustom", payload: 100 })}
      >
        100
      </button>
    </>
  );
};
