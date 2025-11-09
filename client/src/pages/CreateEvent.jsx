import { useState } from "react";

export default function CreateEvent() {
  const [tableData1, setTableData1] = useState([
    { description: "", price: "", reference: "" },
  ]);
  const [tableData2, setTableData2] = useState([
    { description: "", price: "", reference: "" },
  ]);
  const [expectedExpenses, setExpectedExpenses] = useState("");
  const [expectedParticipants, setExpectedParticipants] = useState("");
  const [expectedParticipantsCount, setExpectedParticipantsCount] = useState("");

  // Add and delete rows handlers
  const addRow1 = () => {
    setTableData1([...tableData1, { description: "", price: "", reference: "" }]);
  };

  const addRow2 = () => {
    setTableData2([...tableData2, { description: "", price: "", reference: "" }]);
  };

  const deleteRow1 = (index) => {
    if (tableData1.length > 1) {
      setTableData1(tableData1.filter((_, i) => i !== index));
    }
  };

  const deleteRow2 = (index) => {
    if (tableData2.length > 1) {
      setTableData2(tableData2.filter((_, i) => i !== index));
    }
  };

  // Handlers for table inputs
  const updateTable1 = (index, field, value) => {
    const updated = [...tableData1];
    updated[index][field] = value;
    setTableData1(updated);
  };

  const updateTable2 = (index, field, value) => {
    const updated = [...tableData2];
    updated[index][field] = value;
    setTableData2(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-1">
              Create New Event
            </h1>
            <p className="text-gray-600 text-lg">
              Fill in the details to create an amazing event
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              className="px-7 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition"
              type="submit"
            >
              Approve
            </button>
            <button
              className="px-7 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              type="button"
            >
              Back
            </button>
          </div>
        </header>

        {/* Basic Information */}
        <section className="bg-white rounded-3xl shadow-lg p-10 mb-10">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-8">
            <span className="w-3 h-9 bg-blue-600 rounded-full mr-4"></span>
            Basic Information
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <InputFloatingLabel
              id="eventTitle"
              label="Event Title"
              type="text"
              required
            />
            <InputFloatingLabel
              id="eventDate"
              label="Event Date"
              type="date"
              required
              icon={
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              }
            />
            <InputFloatingLabel
              id="proposedBy"
              label="Proposed by"
              type="text"
              required
            />
            <InputFloatingLabel
              id="eventTime"
              label="Event Time"
              type="time"
              required
              icon={
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              }
            />
            <InputFloatingLabel
              id="eventType"
              label="Event Type"
              type="text"
              required
            />
            <InputFloatingLabel
              id="eventLocation"
              label="Event Location"
              type="text"
              required
              icon={
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              }
            />
          </div>

          <TextareaWithLabel
            label="Event Description"
            placeholder="Describe your event in detail..."
          />
          <TextareaWithLabel
            label="Event Goal"
            placeholder="What are the goals and objectives of this event?"
          />
        </section>

        {/* Additional Information */}
        <section className="bg-white rounded-3xl shadow-lg p-10 mb-10">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-8">
            <span className="w-3 h-9 bg-purple-600 rounded-full mr-4"></span>
            Additional Information
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <InputWithIcon
              id="expectedParticipants"
              label="Expected Participants"
              type="text"
              icon={
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              }
              value={expectedParticipants}
              onChange={(e) => setExpectedParticipants(e.target.value)}
            />
            <InputWithIcon
              id="expectedParticipantsCount"
              label="Expected Participants Count"
              type="number"
              icon={
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              }
              value={expectedParticipantsCount}
              onChange={(e) => setExpectedParticipantsCount(e.target.value)}
            />
          </div>
        </section>

        {/* Budget Report */}
        <section className="bg-white rounded-3xl shadow-lg p-10 mb-12">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-10">
            <span className="w-3 h-9 bg-green-600 rounded-full mr-4"></span>
            Budget Report
          </h2>

          {/* Expected Income */}
          <div className="mb-12">
            <h3 className="flex items-center text-lg font-semibold text-green-700 mb-5">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Expected Income Details
            </h3>
            <TableEditable
              data={tableData1}
              setData={setTableData1}
              addRow={addRow1}
              deleteRow={deleteRow1}
              borderFocusColor="green-500"
              placeholderDesc="Item description"
              placeholderPrice="0.00"
              placeholderRef="Reference"
            />
          </div>

          {/* Expected Expenses */}
          <div>
            <h3 className="flex items-center text-lg font-semibold text-red-700 mb-5">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Expected Expenses Details
            </h3>

            <input
              type="number"
              className="w-full mb-6 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition"
              placeholder="Expected Total Expenses"
              value={expectedExpenses}
              onChange={(e) => setExpectedExpenses(e.target.value)}
            />

            <TableEditable
              data={tableData2}
              setData={setTableData2}
              addRow={addRow2}
              deleteRow={deleteRow2}
              borderFocusColor="red-500"
              placeholderDesc="Expense description"
              placeholderPrice="0.00"
              placeholderRef="Reference"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

// Floating Label Input component
function InputFloatingLabel({ id, label, type, required, icon }) {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {icon}
        </div>
      )}
      <input
        id={id}
        type={type}
        required={required}
        className={`w-full rounded-lg border-2 border-gray-300 px-4 py-3
          focus:border-blue-600 focus:outline-none
          peer
          ${icon ? "pl-10" : "pl-4"}`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute left-4 top-3 text-gray-500 text-base transition-all
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-400
          peer-focus:top-[-10px]
          peer-focus:text-sm
          peer-focus:text-blue-600
          peer-focus:bg-white
          peer-focus:px-1`}
      >
        {label}
      </label>
    </div>
  );
}

// Simple Textarea component with label
function TextareaWithLabel({ label, placeholder }) {
  return (
    <div className="mt-6">
      <label className="block mb-2 font-semibold text-gray-700">{label}</label>
      <textarea
        rows="4"
        className="w-full rounded-lg border-2 border-gray-300 px-4 py-3
          focus:border-blue-600 focus:outline-none resize-none transition"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

// Input with icon on the left
function InputWithIcon({ id, label, type, icon, value, onChange }) {
  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className="block mb-2 font-semibold text-gray-700"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {icon}
        </div>
        <input
          id={id}
          type={type}
          className="w-full rounded-lg border-2 border-gray-300 px-10 py-3
          focus:border-purple-600 focus:outline-none transition"
          value={value}
          onChange={onChange}
          placeholder={label}
        />
      </div>
    </div>
  );
}

// Editable Table component for both income and expense
function TableEditable({
  data,
  setData,
  addRow,
  deleteRow,
  borderFocusColor = "blue-500",
  placeholderDesc,
  placeholderPrice,
  placeholderRef,
}) {
  const updateField = (index, field, value) => {
    const updated = [...data];
    updated[index][field] = value;
    setData(updated);
  };

  return (
    <>
      <div className="overflow-x-auto rounded-lg border-2 border-gray-300">
        <table className="w-full text-left">
          <thead>
            <tr
              className={`bg-gradient-to-r ${
                borderFocusColor === "green-500"
                  ? "from-green-50 to-emerald-50"
                  : borderFocusColor === "red-500"
                  ? "from-red-50 to-orange-50"
                  : "from-blue-50 to-indigo-50"
              }`}
            >
              <th className="px-6 py-4 font-semibold text-gray-700">Description</th>
              <th className="px-6 py-4 font-semibold text-gray-700">Price</th>
              <th className="px-6 py-4 font-semibold text-gray-700">Reference</th>
              <th className="px-6 py-4 text-center font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-b last:border-b-0 border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4">
                  <input
                    type="text"
                    placeholder={placeholderDesc}
                    value={row.description}
                    onChange={(e) => updateField(index, "description", e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder={placeholderPrice}
                    value={row.price}
                    onChange={(e) => updateField(index, "price", e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    placeholder={placeholderRef}
                    value={row.reference}
                    onChange={(e) => updateField(index, "reference", e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  />
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    type="button"
                    onClick={() => deleteRow(index)}
                    disabled={data.length === 1}
                    className={`inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium
                      ${data.length === 1 ? "text-gray-400 cursor-not-allowed" : "text-red-600 hover:bg-red-100"}
                      transition`}
                    title={data.length === 1 ? "Cannot delete last row" : "Delete row"}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={addRow}
          className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Row
        </button>
      </div>
    </>
  );
}