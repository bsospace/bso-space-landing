import React from 'react';

const TestErrorPage = () => {
    throw new Error("This is a test error to trigger the 500 page.");
};

export default TestErrorPage;