import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function AddEvent() {
  const { user } = useContext(UserContext);

  const [formData, setFormData] = useState({
    owner: user ? user.name : "",
    title: "",
    optional: "",
    description: "",
    organizedBy: "",
    eventDate: "",
    eventTime: "",
    location: "",
    ticketPrice: 0,
    image: null, // must be null for file upload
    likes: 0,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      for (const key in formData) {
        if (formData[key] !== null) data.append(key, formData[key]);
      }

      const response = await axios.post(
        "http://localhost:4000/createEvent", // full backend URL
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Event posted successfully:", response.data);
      alert("Event created successfully!");
    } catch (error) {
      console.error("Failed to create event:", error);
      alert("Failed to create event. Check console for details.");
    }
  };

  return (
    <div className="flex flex-col ml-20 mt-10">
      <h1 className="font-bold text-[36px] mb-5">Post an Event</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none"
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="rounded mt-2 pl-5 px-4 py-2 ring-sky-700 ring-2 border-none"
          />
        </label>

        <label>
          Organized By:
          <input
            type="text"
            name="organizedBy"
            value={formData.organizedBy}
            onChange={handleChange}
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none"
          />
        </label>

        <label>
          Event Date:
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none"
          />
        </label>

        <label>
          Event Time:
          <input
            type="time"
            name="eventTime"
            value={formData.eventTime}
            onChange={handleChange}
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none"
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none"
          />
        </label>

        <label>
          Ticket Price:
          <input
            type="number"
            name="ticketPrice"
            value={formData.ticketPrice}
            onChange={handleChange}
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none"
          />
        </label>

        <label>
          Image:
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="rounded mt-2 pl-5 px-4 py-2 ring-sky-700 ring-2 border-none"
          />
        </label>

        <button type="submit" className="primary">
          Submit
        </button>
      </form>
    </div>
  );
}
