import React, { useReducer } from 'react'

const initialState = {
  name: '',
  savedName: localStorage.getItem('savedName'),
  isSaving: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload } 
    case 'save_start':
      return { ...state, isSaving: true }
    case 'save_success':
      return { ...state, isSaving: false, savedName: action.payload }
    default:
      return state
  }
}

export default function HW() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = e => {
    dispatch({ type: 'name', payload: e.target.value })
  }

  const handleSave = () => {
    dispatch({ type: 'save_start' })

    setTimeout(() => {
      localStorage.setItem('savedName', state.name)
      dispatch({ type: 'save_success', payload: state.name })
    }, 1000)
  }

  return (
    <div>
      <h2>Esimdi saqtau</h2>
      <input
        type='text'
        name='name'
        value={state.name}
        placeholder='Esiminizdi zhazynyz'
        onChange={handleChange}
      />
      <button type='submit' onClick={handleSave}>
        {state.isSaving ? 'Saqtaluda...' : 'Saqtau'}
      </button>
      <div>
        <p>Saqtalgan esim:</p> {state.savedName}
      </div>
    </div>
  )
}