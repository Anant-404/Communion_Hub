'use client';

import { useState } from 'react';
import { Event } from '@/app/types/index';

const CATEGORIES = ['All', 'Religious', 'Social', 'Charity'] as const;

type EventListProps = {
  events: Event[];
};

export default function EventList({ events }: EventListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter events by category
  const filteredEvents = events.filter((event) =>
    selectedCategory === 'All' ? true : event.category === selectedCategory
  );

  // Function to format the date in a stable MM/DD/YYYY format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure 2-digit month
    const day = String(date.getDate()).padStart(2, '0'); // Ensure 2-digit day
    return `${month}/${day}/${year}`; // MM/DD/YYYY format
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Upcoming Events</h2>

        {/* Category Filter */}
        <div className="flex gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-200 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-medium text-gray-900">{event.title}</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {event.category}
              </span>
            </div>
            <div className="text-sm text-gray-500 space-y-1">
              <p>📅 {formatDate(event.date)}</p>
              <p>📍 {event.location}</p>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          </div>
        ))}

        {filteredEvents.length === 0 && (
          <div className="text-center py-8 text-gray-500">No events found for this category.</div>
        )}
      </div>
    </div>
  );
}
