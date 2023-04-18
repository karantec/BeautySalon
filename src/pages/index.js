import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import BrowseEvents from './BrowseEvents';

const index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Event Booking Website - Home</title>
        <meta name="description" content="Find and book events online" />
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-white shadow">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-6">
              <div>
                <Link href="/">
                  <span className="text-xl font-bold text-gray-800">Event Booking</span>
                </Link>
              </div>
              <div>
                <Link href="/login">
                  <span className="text-gray-500 hover:text-gray-800 mr-4">Log in</span>
                </Link>
                <Link href="/signup">
                  <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Sign up</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center items-center">
            <div className="w-full max-w-lg">
              <h1 className="text-4xl font-bold mb-4">Find and book events online</h1>
              <form>
                <input
                  type="text"
                  placeholder="Search events"
                  className="bg-white focus:outline-none border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </form>
            </div>
          </div>
        </div>
        {/* ***************************************** FEATURERD EVENTS ***************************************** */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-4">Featured events</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <div className="bg-white border rounded-lg overflow-hidden">
                  <img src="/event1.jpg" alt="Event 1" className="w-full" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Event 1</h3>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link href="/events/1">
                      <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                        Book now
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <div className="bg-white border rounded-lg overflow-hidden">
                  <img src="/event2.jpg" alt="Event 2" className="w-full" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Event 2</h3>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link href="/events/2">
                      <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                        Book now
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <div className="bg-white border rounded-lg overflow-hidden">
                  <img src="/event3.jpg" alt="Event 3" className="w-full" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Event 3</h3>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link href="/events/3">
                      <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                        Book now
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <div className="bg-white border rounded-lg overflow-hidden">
                  <img src="/event4.jpg" alt="Event 4" className="w-full" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Event 4</h3>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link href="/events/4">
                      <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                        Book now
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ***************************************** CATEGORIES EVENTS ***************************************** */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-4">Categories of events</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
              <div className="bg-white border rounded-lg overflow-hidden">
                <img src="/category1.jpg" alt="Category 1" className="w-full" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Category 1</h3>
                  <Link href="/events?category=1">
                    <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                      View events
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
              <div className="bg-white border rounded-lg overflow-hidden">
                <img src="/category2.jpg" alt="Category 2" className="w-full" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Category 2</h3>
                  <Link href="/events?category=2">
                    <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                      View events
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
              <div className="bg-white border rounded-lg overflow-hidden">
                <img src="/category3.jpg" alt="Category 3" className="w-full" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Category 3</h3>
                  <Link href="/events?category=3">
                    <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                      View events
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
              <div className="bg-white border rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Category 4" className="w-full" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Category 4</h3>
                  <Link href="/events?category=4">
                    <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                      View events
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
              <div className="bg-white border rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Category 5" className="w-full" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Category 5</h3>
                  <Link href="/events?category=5">
                    <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                      View events
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <BrowseEvents /> */}
    </>);
}
export default index;

