import React, { useState, useEffect } from 'react'
import { eventsData } from 'data/events'

function BrowseEvents() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventsData.map((event, index) => (
                <div className="bg-white shadow-md rounded-lg p-4" key={event.index}>
                    <img src={event.image} alt={event.title} className="h-48 w-full object-cover rounded-lg" />
                    <h2 className="text-lg font-bold mt-4">{event.title}</h2>
                    <p className="text-gray-500 mt-2">{event.date}</p>
                    <p className="text-gray-700 mt-2">{event.description}</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">
                        Buy Tickets
                    </button>
                </div>
            ))}
        </div>
    )
}

export default BrowseEvents
