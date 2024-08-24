import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListNotes = () => {
  const [notes, setNotes] = useState([]);
  const [pdfUrls, setPdfUrls] = useState({});
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('https://myproject-env.eba-3keamqkz.us-east-1.elasticbeanstalk.com/api/notes/all');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const openNoteAsPdf = async (noteId) => {
    try {
      const response = await axios.get(`https://myproject-env.eba-3keamqkz.us-east-1.elasticbeanstalk.com/api/notes/${noteId}`, {
        responseType: 'blob' // Ensure response is treated as a binary blob
      });
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      setPdfUrls({ ...pdfUrls, [noteId]: url });
      setSelectedNoteId(noteId);
    } catch (error) {
      console.error('Error fetching note:', error);
    }
  };

  const downloadPdf = (noteId) => {
    const pdfUrl = pdfUrls[noteId];
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.setAttribute('download', `note_${noteId}.pdf`);
      document.body.appendChild(link);
      link.click();
    }
  };

  return (
    <div>
      <h2>List of Uploaded PDFs</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.title}
            <button onClick={() => openNoteAsPdf(note.id)}>View PDF</button>
            <button onClick={() => downloadPdf(note.id)}>Download PDF</button>
          </li>
        ))}
      </ul>
      {pdfUrls[selectedNoteId] && (
        <div>
          <h3>PDF Preview</h3>
          <iframe src={pdfUrls[selectedNoteId]} style={{ width: '90%', height: '900px', borderRadius: '20px', textAlign: 'center' }} title="PDF Preview" />
        </div>
      )}
    </div>
  );
};

export default ListNotes;
