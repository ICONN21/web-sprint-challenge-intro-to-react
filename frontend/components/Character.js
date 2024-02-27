import React, { useState } from 'react'

function Character({ data }) { // ❗ Add the props
  const { name, homeworldName } = data

  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  }
  
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className='character-card' onClick={toggleHomeworld}>
      <h3 className='character-name'>
      {name}
      </h3>

      {showHomeworld && (
        
          <p>
            Planet:  
            <span className="character-planet"> {homeworldName}</span>
          </p>
          
      )}
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
    
  )
  
  }

export default Character
