import React, { useState } from 'react';

interface User {
  uid: number;
  name: string;
}

export const Auth: React.FC<JSX.Element> = ({ props }) => {
  const [user, setUser] = useState<User>({
    uid: 0,
    name: '',
  });

  const handleOnClick = (): void => {
    setUser({
      uid: 231,
      name: 'Dario',
    });
  };

  return (
    <>
      <h3>User</h3>
      <button onClick={handleOnClick}>Login</button>

      <pre>{JSON.stringify(user)}</pre>
    </>
  );
};
