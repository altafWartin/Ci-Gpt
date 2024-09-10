import React, { useState } from 'react';
import { HiMenuAlt3, HiOutlineX, HiPlus, HiPaperClip, HiArrowRight } from 'react-icons/hi';

const ChatScreen = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-screen w-full flex flex-col md:flex-row">
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white p-4 transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-16'
                    } md:w-64 h-full`}
            >
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? <HiOutlineX size={24} /> : <HiMenuAlt3 size={24} />}
                    </button>
                    <button
                        className={`md:block ${isOpen ? 'block' : 'hidden'}`}
                    >
                        <HiPlus size={24} />
                    </button>
                </div>
                {isOpen && (
                    <div className="mt-8">
                        <button className="bg-blue-600 py-2 px-4 rounded-lg w-full mt-4">
                            Start New Chat
                        </button>
                    </div>
                )}
            </div>

            {/* Main content */}
            <div className="flex-grow flex flex-col">
                {/* Header */}
                <div className="bg-gray-100 border-b border-gray-300 p-4 flex justify-end">
                    <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg">
                        Upgrade Now
                    </button>
                </div>

                {/* Chat Body */}
                <div className="flex-grow flex flex-col justify-center items-center p-4">
                    <p className="text-gray-500 text-lg">Welcome to ChatGPT-like interface!</p>
                </div>

                {/* Chat Input */}
                <div className="bg-gray-100 border-t border-gray-300 p-4 flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-grow bg-white border border-gray-300 rounded-lg p-2"
                    />
                    <button>
                        <HiPaperClip size={24} />
                    </button>
                    <button>
                        <HiArrowRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatScreen;
