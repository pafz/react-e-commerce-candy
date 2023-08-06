import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
//TODO: change Uppercase Products.map line 36

const Profile = () => {
  const { getUserInfo, getOrdersAndProducts, user, ordersProducts } =
    useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    getOrdersAndProducts();
  }, []);

  if (!user) {
    return <span>Cargando...</span>;
  }
  console.log(ordersProducts);
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
        <ul>
          {ordersProducts.map(order => {
            return (
              <li key={order.id}>
                {order.id} - {order.createdAt} - TOTAL: {order.payment}
                <ul>
                  {order.Products.map(product => {
                    return (
                      <li>
                        {product.id} - {product.name}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Profile;
