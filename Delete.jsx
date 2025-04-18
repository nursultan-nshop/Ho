const Delete = ({ id, dispatch }) => {
    return (
      <button
        onClick={() => dispatch({ type: 'DELETE_TODO', id })}
      >
        Delete
      </button>
    );
  };
  
  export default Delete;