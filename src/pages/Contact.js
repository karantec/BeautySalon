import { useState } from 'react';

export default function EventBooking() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        event: '',
        date: '',
        guests: '',
        message: '',
    });

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
        // You can add your own logic here to submit the form data
    };

    const handleInputChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <div className="max-w-screen-xl mx-auto my-12 p-6 bg-white rounded-md shadow-md">
                <h1 className="text-3xl font-bold mb-6">Book Your Event</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full rounded-md"
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full rounded-md"
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="event">
                            Event
                        </label>
                        <select
                            className="border border-gray-400 p-2 w-full rounded-md"
                            name="event"
                            id="event"
                            value={formData.event}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select an event</option>
                            <option value="">Wedding</option>
                            <option value="">Corporate Party</option>
                            <option value="">Private Party</option>
                            {/* <option value="music">Music Concert</option>
                            <option value="art">Art Exhibition</option>
                            <option value="film">Film Screening</option>
                            <option value="food">Food Tasting</option>
                            <option value="market">Market Fair</option>
                            <option value="comedy">Comedy Show</option>
                            <option value="holiday">Holiday Celebration</option> */}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                            Date
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full rounded-md"
                            type="date"
                            name="date"
                            id="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="guests">
                            Number of Guests
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full rounded-md"
                            type="number"
                            name="guests"
                            id="guests"
                            value={formData.guests}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                            Message (optional)
                        </label>
                        <textarea
                            className="border border-gray-400 p-2 w-full rounded-md"
                            name="message"
                            id="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                            type="submit"
                        >
                            Book Event
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
