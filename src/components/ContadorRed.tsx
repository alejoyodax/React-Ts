import { useReducer } from "react";

const initialState = {
  contador: 10,
};

type ActionType = { type: "incrementar" };

const constadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
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
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "incrementar" })}
      >
        +1
      </button>
      <h2>Contador: {contadorState.contador}</h2>
    </>
  );
};
