// import React from 'react';

// const Catalogue = () => {
//   return (
//     <div>
//       <h2>Catalogue de Fleurs</h2>
//       {/* Ajoutez ici une liste de fleurs depuis une source de données */}
//     </div>
//   );
// };

// export default Catalogue;
import React from 'react';

const Catalogue = () => {
  const flowers = [
    { id: 1, name: 'Rose', image: 'rose.jpg' },
    { id: 2, name: 'Lily', image: 'lily.jpg' },
    { id: 3, name: 'Tulip', image: 'tulip.jpg' },
    { id: 4, name: 'Tuli', image: 'tuli.jpg' },
    { id: 5, name: 'Tul', image: 'tul.jpg' },
    { id: 6, name: 'Tuip', image: 'tuip.jpg' }
    
    // Add more flowers with their names and image paths
  ];

  return (
    <div>
      <h2>Catalogue de Fleurs</h2>
      <ul>
        {flowers.map((flower) => (
          <li key={flower.id}>
<img src={`../path/to/images/${flower.image}`} alt={flower.name} />
            <p>{flower.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogue;