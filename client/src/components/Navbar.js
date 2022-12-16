import React, { useContext } from 'react';
import { Context } from '..';

export default function Navbar() {
  const { user } = useContext(Context);

  return <div>Navbar</div>;
}
