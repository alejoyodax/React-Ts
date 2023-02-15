import { useForm } from "../hooks/useForm";

export const Formulario2 = () => {
  const { formulario, handleChange } = useForm({
    postal: "ABC",
    ciudad: "Ottawa",
  });

  const { postal, ciudad } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          name="postal"
          value={postal}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
