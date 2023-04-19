import React, { useState } from "react";

export default function Booking() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventDate: '',
        eventTime: '',
        guests: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold mb-6">Book Your Event</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-lg">
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                className="border border-gray-400 p-2 w-full rounded-md"
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                className="border border-gray-400 p-2 w-full rounded-md"
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap mb-6">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
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

                        <div className="w-full md:w-1/2">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                className="border border-gray-400 p-2 w-full rounded-md"
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap mb-6">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="eventDate">
                                Event Date
                            </label>
                            <input
                                className="border border-gray-400 p-2 w-full rounded-md"
                                type="date"
                                name="eventDate"
                                id="eventDate"
                                value={formData.eventDate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    {/* </div> */}

                    <div className="w-full md:w-1/2">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="eventTime">
                            Event Time
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full rounded-md"
                            type="time"
                            name="eventTime"
                            id="eventTime"
                            value={formData.eventTime}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {/* </div > */}

                    <div className="flex flex-wrap mb-6">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
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
                    </div>

                    <div className="flex flex-wrap mb-6">
                        <div className="w-full">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                                Message
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
                        {/* </div> */}

                        <div className="flex justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                type="submit"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </form >
            </div >
        </>
    );
}

