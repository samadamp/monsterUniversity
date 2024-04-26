import { useMonsterContext } from './MonsterContext';
import { Monster } from '../MonsterTypes'; 



const MonsterList: React.FC = () => {
  const { state, dispatch } = useMonsterContext();
  const { monsters } = state;

  const deleteMonster = (id: string) => {
    dispatch({ type: 'REMOVE_MONSTER', id });
  };

  return (
    <>
          <h2 className='text-2xl'>MONSTER STUDENTS:</h2>
    <ul>
      {monsters.map((monster: Monster) => (
    
        <li className='my-6' key={monster.id}>
          {monster.firstName} {monster.lastName} <p>{ `Horns: ${monster.horns}`}</p> <p>{ `Elemental Type: ${monster.type}`}</p>{' '}
          <button className='"bg-white hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"' onClick={() => deleteMonster(monster.id)}>Delete</button>
        </li>
      ))}
    </ul>
      </>
  );
};

export default MonsterList;
