import { useEffect, useState } from 'react';

function Account() {
  const [user, setUser] = useState([]);
 async function MyAccaunt() {
    const response = await fetch('/api');
    const data = await response.json();
    return setUser(data);
  };
console.log(user);
  useEffect(() => {
    setUser();
  }, [user]);

  return (
    <div>
      <h1>Личный кабинет</h1>
      <h5>{user}</h5>
    </div>
  );
}
export default Account;
