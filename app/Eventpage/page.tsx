'use client';

import { useState } from 'react';
import AddEventForm from '@/components/AddEventForm';
import EventList from '@/components/EventList';
import { Event } from '@/app/types/index';
import WhoWeAre from '@/components/WhoWeAre';

const Page = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Community Cleanup Drive',
      date: '2024-04-15',
      location: 'Central Park',
      description: 'Join us for our monthly community cleanup initiative.',
      category: 'Charity',
    },
    {
      id: '2',
      title: 'Summer Music Festival',
      date: '2024-05-20',
      location: 'Riverside Amphitheater',
      description: 'Annual music celebration featuring local artists.',
      category: 'Social',
    },
    {
      id: '3',
      title: 'Interfaith Gathering',
      date: '2024-04-25',
      location: 'Community Center',
      description: 'A peaceful gathering to promote religious harmony.',
      category: 'Religious',
    },
  ]);

  // Function to add new events
  const addEvent = (newEvent: Event) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Community Events
        </h1>
        <div className="grid gap-8 md:grid-cols-[1fr_350px]">
          <EventList events={events} />
          <AddEventForm onAddEvent={addEvent} />
          
        </div>
        <WhoWeAre/>
      </div>
    </main>
  );
};

export default Page;
