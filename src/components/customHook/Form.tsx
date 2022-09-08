import React, { ChangeEvent, useState } from 'react';
interface FormProps {
  name: string;
  email: string;
  password: string;
}
export const Form = () => {
  const [form, setForm] = useState<FormProps>({
    name: '',
    email: '',
    password: '',
  });

  const handelChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };

  const handelSubmit = () => {};

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="">Name</label>
      <input type="text" name="name" onChange={handelChange} />

      <label htmlFor="">Email</label>
      <input type="text" name="email" onChange={handelChange} />

      <label htmlFor="">Password</label>
      <input type="password" name="password" onChange={handelChange} />
    </form>
  );
};
