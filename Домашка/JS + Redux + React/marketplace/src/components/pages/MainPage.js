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

// import React from "react";

// const MainPage = () => 
//     <div>
//         <p>тут буде головна сторінка</p>
//     </div>
// export default MainPage;

// import React, { useState, useEffect } from 'react';

// function MainPage() {
//   const [ads, setAds] = useState([]);

//   useEffect(() => {
//     fetch('http://marketplace.node.ed.asmer.org.ua/graphql')
//       .then(response => response.json())
//       .then(res => setAds(res.data)) // Обратите внимание на изменение здесь
//       .catch(error => console.error('Помилка при завантажені даних:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Объявления</h1>
//       <ul>
//         {data.map(data => (
//           <li key={data.id}>
//             <h2>{data.title}</h2>
//             <p>{data.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MainPage;

