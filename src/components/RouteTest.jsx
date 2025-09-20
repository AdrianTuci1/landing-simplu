import { useState, useEffect } from 'react';

const RouteTest = () => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Route Test
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Testing if routes are working correctly
          </p>
          
          <div className="mt-8">
            <p className="text-lg font-semibold">Current Path:</p>
            <p className="text-sm text-gray-600 mt-2">{currentPath}</p>
            
            <div className="mt-6 space-y-2">
              <a 
                href="/" 
                className="block w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Test Home Route (/)
              </a>
              
              <a 
                href="/auth/callback" 
                className="block w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Test Auth Callback Route (/auth/callback)
              </a>
              
              <a 
                href="/pricing" 
                className="block w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
              >
                Test Pricing Route (/pricing)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteTest;
