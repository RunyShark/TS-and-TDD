interface Props {
  labelID: string[];
  id: number;
}

export const TestError = ({ labelID, id }: Props) => {
  return (
    <div>
      <h1>Hello</h1>
      <h3>{labelID[id]}</h3>
    </div>
  );
};
