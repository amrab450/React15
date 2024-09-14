// Import React and useState hook
import React, { useState } from 'react';

// Import CSS file
import './App.css';

// Import Sidebar component
import Sidebar from './components/Sidebar';

// Initial song list data

const initialState = [
  { title: 'Song 1', artist: 'adams', starred: false },
  { title: 'Song 2', artist: 'jones', starred: false },
  { title: 'Song 3', artist: 'djkhaled', starred: false },
];

// Main App component
function App() {
  
  // Initialize song list state
  const [songList, setSongList] = useState(initialState);

  // Handle song creation
  const handleCreate = () => {
    const newTitle = prompt("Title");
    const newArtist = prompt("Artist");

    if (newTitle && newArtist) {
      const newItem = { title: newTitle, artist: newArtist, starred: false };
      setSongList([...songList, newItem]);
    } else {
      alert("Please enter both title and artist.");
    }
  };

  // Handle song deletion
  
  const handleDelete = (index) => {
    setSongList(songList.filter((song, i) => i !== index));
  };

  // Handle song starring
  const handleToggleStar = (index) => {
    const updatedList = [...songList];
    updatedList[index].starred = !updatedList[index].starred;
    setSongList(updatedList);
  };

  // Render App component
  return (
    
    // App layout // Sidebar component  // Create new song button  // Delete song button// Toggle star button
    <div className="App">
     
      <Sidebar title="My Sidebar" />
      <div className="SongTracker">
        <h1>Song Tracker</h1>
      
        <button onClick={handleCreate}>Create New Song</button>
        <ul>
          {songList.map((song, index) => (
            <li key={index}>
              <h2>{song.title}</h2>
              <p>{song.artist}</p>
            
              <button onClick={() => handleDelete(index)}>Delete</button>
            
              <button onClick={() => handleToggleStar(index)}>
                {song.starred ? 'Unstar' : 'Star'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Export App component
export default App;
