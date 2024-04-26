import AddMonsterForm from './AddMonsterForm';
import MonsterList from './MonsterList';
import { MonsterProvider } from './MonsterContext';

import monstersData from "../monster.json";

const MonsterManager = () => {
   

    return (
        <MonsterProvider initialMonsters={monstersData}>
            <div className='flex flex-col items-center gap-10'>
                <h2 className='text-6xl'>👹Monster University👹</h2>
                <AddMonsterForm />
                <MonsterList />
            </div>
        </MonsterProvider>
    );
};

export default MonsterManager;