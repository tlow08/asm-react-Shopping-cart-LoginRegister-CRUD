import { useAuth } from "../hooks/useAuth";
import { InUser } from "../interface/User";


type Props = {
  onSubmit: (values: InUser) => void;
};

const AuthFrom = ({ onSubmit }: Props) => {
  const {handleSubmit, register, errors } = useAuth();
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-md m-auto h-lvh"
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email", { required: true })}
          />
          <div id="emailHelp" className="form-text text-danger">
            {errors.email && <p>{errors.email?.message}</p>}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            {...register("password", { required: true })}
          />
          <div id="emailHelp" className="form-text text-danger">
            {errors.password && <p>{errors.password?.message}</p>}
          </div>
        </div>

        <button type="submit" className="btn btn-secondary w-full">
          Submit
        </button>
      </form>
    </>
  );
};

export default AuthFrom;
