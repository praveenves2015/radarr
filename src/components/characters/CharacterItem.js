import React from 'react'

const CharacterItem = ({item}) => {
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <h1>Reaveal Character</h1>
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Gender:</strong> {item.gender}
            </li>
            <li>
              <strong>Aliases:</strong> {item.aliases}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default CharacterItem
