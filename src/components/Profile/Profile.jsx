import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { OrderContext } from '../../context/OrdersContext/OrdersState';

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);
  const { orders } = useContext(OrderContext); ///

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <span>Cargando...</span>;
  }

  return (
    <>
      <div key={user.id}>
        Your profile
        <p>name: {user.name}</p>
        <p>bday: {user.bday}</p>
        <p>mail: {user.mail}</p>
        <p>role: {user.role}</p>
        <p>updatedAt: {user.updatedAt}</p>
      </div>
      <div>
        Yours orders
        {orders}
        <p>
          {/* {user.orderIds.map(order => {
            return (
              <div key={order.id}>
                <p>Nº pedido: {order.id}</p>
              </div>
            );
          })} */}
        </p>
      </div>
    </>
  );
};

export default Profile;
