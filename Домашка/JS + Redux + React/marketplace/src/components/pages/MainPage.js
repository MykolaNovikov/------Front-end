import React, { useEffect } from 'react';
import {useDispatch } from 'react-redux';
import { useAdFindQuery } from '../../reducers/slices';

const MainPage = () => {
  const dispatch = useDispatch();
//   const { data: adds, isLoading, isError } = useAdFindQuery();
const { data: adds, isLoading, isError } = useAdFindQuery(null, {
    enabled: true // Включаємо запит навіть для неавторизованих користувачів
  });

  const setAdds = (adds) => {
    dispatch(setAdds(adds));
  };

  useEffect(() => {
    if (adds) {
      setAdds(adds);
    }
  }, [adds, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Помилка при завантажені оголошень</div>;
  }

  return (
    <div>
      <h1>Всі оголошення</h1>
      <ul>
        {adds.map((add) => (
          <li key={add.id}>
            {add.title} - {add.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MainPage;

