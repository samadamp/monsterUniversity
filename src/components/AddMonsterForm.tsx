import { useState } from 'react';
import { useMonsterContext } from './MonsterContext';
import { Monster } from '../MonsterTypes'; 


const AddMonsterForm: React.FC = () => {
  const { addMonster } = useMonsterContext();
  const [formData, setFormData] = useState<Monster>({ id: '', firstName: '', lastName: '', horns: 0, type: ''});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const uniqueId = Math.random().toString(36).substr(2, 9);
    addMonster({ ...formData, id: uniqueId });
    setFormData({ id: '', firstName: '', lastName: '', horns: 0, type: ''});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='border'
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
      />
      <input className='border'
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
      />
      <input  className='border'
        type="number"
        name="horns"
        value={formData.horns}
        onChange={handleInputChange}
        placeholder="horns"
      />
      <input className='border'
        type="text"
        name="type"
        value={formData.type}
        onChange={handleInputChange}
        placeholder="Elemental Type"
      />
      
      <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow ml-2' type="submit">Add Monster</button>
    </form>
  );
};

export default AddMonsterForm;