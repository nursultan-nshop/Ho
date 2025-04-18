import { useState } from 'react';

const Edit = ({ id, text, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleSave = () => {
    if (editedText.trim()) {
      dispatch({ type: 'EDIT_TODO', id, newText: editedText });
      setIsEditing(false);
    }
  };

  return (
    <div className="edit-container">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleSave} className="save-btn">Save</button>
        </>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default Edit;