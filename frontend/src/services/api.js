import axios from "axios";

const API_URL = "http://localhost:3000/notes";

export const getNotes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
};

export const createNote = async (note) => {
  try {
    const response = await axios.post(API_URL, note);
    return response.data;
  } catch (error) {
    console.error("Error creating note:", error);
  }
};

export const editNote = async (id, updatedNote) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedNote);
    return response.data;
  } catch (error) {
    console.error("Error editing note:", error);
  }
};

export const deleteNote = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting note:", error);
  }
};

export const archiveNote = async (id) => {
  try {
    const response = await axios.put(`${API_URL}/${id}/archive`);
    return response.data;
  } catch (error) {
    console.error("Error archiving note:", error);
  }
};
