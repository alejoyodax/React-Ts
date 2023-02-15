
import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

export const Formulario = () => {
  const { nombre, email, edad, handleChange, formulario } = useForm<FormData>({
    email: "alejoyodax@gmail.com",
    nombre: "Alejandro Silva",
    edad: 25,
  });

  // const { email, nombre, edad } = formulario;

  // const [formulario, setFormulario] = useState({
  //   email: "",
  //   nombre: "",
  // });

  // // Debemos especificar el tipo de dato que llega (ChangeEvent) y que es lo que cambia <HTMLInputElement>
  // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = target;

  //   setFormulario({
  //     ...formulario,
  //     [name]: value,
  //   });
  // };

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          onChange={handleChange}
          name="email"
          value={email}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="number"
          className="form-control"
          name="edad"
          value={edad}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
