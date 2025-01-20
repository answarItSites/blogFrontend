import React, { useEffect } from 'react';

const TrackingPage = () => {
    useEffect(() => {
        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_MEASUREMENT_ID';
        document.head.appendChild(script);

        // Initialize Google Analytics
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'YOUR_MEASUREMENT_ID');

        // Cleanup
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-full bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>
            <p>Google Analytics has been integrated into your website.</p>
            <p className="mt-2">Please visit your Google Analytics dashboard to view statistics:</p>
            <a 
                href="https://analytics.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Open Google Analytics Dashboard
            </a>
        </div>
    );
};

export default TrackingPage;