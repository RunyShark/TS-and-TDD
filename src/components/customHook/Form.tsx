import { useForm } from '../../index/index';
interface FormProps {
  name: string;
  email: string;
  password: string;
}
export const Form = () => {
  const { form, handelChange } = useForm<FormProps>({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = form;
  return (
    <form>
      <label htmlFor="">Name</label>
      <input type="text" name="name" value={name} onChange={handelChange} />

      <label htmlFor="">Email</label>
      <input type="text" name="email" value={email} onChange={handelChange} />

      <label htmlFor="">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handelChange}
      />
    </form>
  );
};
