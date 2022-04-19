import React from 'react';

const Testcompo = ({ list }) => {
    const data = list.map((emp) =>
        <div className='testcompo' key={emp.id}>
            <div>Nom:{emp.name}</div>
            <div>Genre:{emp.genre}</div>
            <div>Type de contrat:{emp.typeContat}</div>

        </div>)
    return (
        <div className='name-liste'>
            {data}


        </div>
    );
};

export default Testcompo;