import axios from "axios";

const handleDeleteEvent = async (eventId) => {
  try {
    const response = await axios.delete(`http://localhost:4000/event/${eventId}`);
    console.log(response.data.message);
    alert("Event deleted successfully!");
    // Optionally, refresh the event list
  } catch (error) {
    console.error("Failed to delete event:", error);
    alert("Failed to delete event. Check console for details.");
  }
};
