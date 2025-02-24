"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Custom500: React.FC = () => {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 text-center px-4">
        {/* Animated Emoji */}
        <motion.div
            className="text-6xl text-red-500"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        >
            ⚠️
        </motion.div>

        {/* Error Message */}
        <motion.h1
            className="text-4xl font-bold mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            500 - Server Error
        </motion.h1>

        <motion.p
            className="text-lg text-gray-600 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            Oops! Something went wrong on our end. Please try again later.
        </motion.p>

        {/* Back to Home Link */}
        <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <Link href="/">
            <a className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Go Back Home
            </a>
            </Link>
        </motion.div>
        </main>
    );
};

export default Custom500;
