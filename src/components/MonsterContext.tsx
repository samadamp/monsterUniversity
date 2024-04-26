import { createContext, useContext, useReducer } from "react";
import { Monster } from '../MonsterTypes';
import monstersData from "../monster.json";

type Action =
  | { type: 'ADD_MONSTER'; monster: Monster }
  | { type: 'REMOVE_MONSTER'; id: string };

interface MonsterState {
  monsters: Monster[];
}


interface ContextValue {
  state: MonsterState;
  dispatch: React.Dispatch<Action>;
  addMonster: (monster: Monster) => void; 
}


const initialState: MonsterState = {
  monsters: monstersData as Monster[],
};
const MonsterContext = createContext<ContextValue>({
  state: initialState,
  dispatch: () => null,
  addMonster: () => null, 
});


const monsterReducer = (state: MonsterState, action: Action): MonsterState => {
  switch (action.type) {
    case 'ADD_MONSTER':
      return { ...state, monsters: [...state.monsters, action.monster] };
    case 'REMOVE_MONSTER':
      return {
        ...state,
        monsters: state.monsters.filter(monster => monster.id !== action.id),
      };
    default:
      return state;
  }
};

export const MonsterProvider: React.FC<{ children: React.ReactNode, initialMonsters: Monster[] }> = ({ children, initialMonsters }) => {
  const [state, dispatch] = useReducer(monsterReducer, {monsters: initialMonsters});

  const addMonster = (monster: Monster) => {
    dispatch({ type: 'ADD_MONSTER', monster });
  };

  return (
    <MonsterContext.Provider value={{ state, dispatch, addMonster }}>
      {children}
    </MonsterContext.Provider>
  );
};


export const useMonsterContext = () => useContext(MonsterContext);