import { ChangeEvent, useState } from 'react';

export const useForm = <T,>(initialState: T) => {
  const [form, setForm] = useState(initialState);

  const handelChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };

  return {
    form,
    handelChange,
  };
};
