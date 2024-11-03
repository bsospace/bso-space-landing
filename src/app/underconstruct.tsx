"use client";

import React from "react";
import { motion } from "framer-motion";

const UnderConstructionPage: React.FC = () => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 text-center">
        <div className="space-y-8 px-6 max-w-lg">
            {/* Animated Icon */}
            <motion.div
            className="text-yellow-500 text-6xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, yoyo: Infinity }}
            >
            🚧
            </motion.div>

            {/* Main Message */}
            <motion.h1
            className="text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            We&apos;re Building Something Awesome!
            </motion.h1>

            {/* Description */}
            <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            >
            Our site is currently under construction. We’re working hard to bring
            you a better experience. Please check back soon!
            </motion.p>
        </div>
        </main>
    );
};

export default UnderConstructionPage;
