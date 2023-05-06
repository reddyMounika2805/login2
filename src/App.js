import { useState } from 'react';
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoginError, setIsLoginError] = useState(false);

  const onSubmit = (data) => {
   
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </label>
      <label>
        Password
        <input type="password" {...register("password", { required: true, minLength: 5, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{5,}$/ })} />
        {errors.password?.type === "required" && <span>This field is required</span>}
        {errors.password?.type === "minLength" && <span>Password must be at least 5 characters long</span>}
        {errors.password?.type === "pattern" && <span>Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character</span>}
      </label>
      {isLoginError && <span>Login failed. Please try again.</span>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
