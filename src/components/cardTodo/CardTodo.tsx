import { Todo } from '../interfaces/interfaces';

interface Props {
  args: Todo;
}

export const CardTodo = ({ args }: Props) => {
  const handelDdClick = () => {
    console.log('handleDBclick:', args.desc);
  };
  return (
    <>
      <li onDoubleClick={handelDdClick}>{args.desc}</li>
    </>
  );
};
