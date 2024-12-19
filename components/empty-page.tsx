"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search, Inbox, ArrowRight } from 'lucide-react'
import { useRouter } from "next/navigation"

export default function EmptyState() {
    const router = useRouter();
    return (
        <div className="flex min-h-[80vh] items-center justify-center bg-dot-pattern">
            <div className="relative">
                {/* Animated background gradient */}
                <div className="absolute inset-0 -z-10">
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 text-center"
                >
                    {/* Floating elements */}
                    <div className="relative h-48 w-48 mx-auto mb-8">
                        <motion.div
                            className="absolute left-0 top-0"
                            animate={{
                                y: [0, -10, 0],
                                rotate: [-5, 5, -5],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 shadow-xl">
                                <Search className="h-6 w-6" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute right-0 top-1/4"
                            animate={{
                                y: [0, 10, 0],
                                rotate: [5, -5, 5],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 shadow-xl">
                                <Inbox className="h-8 w-8" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-0 left-1/4"
                            animate={{
                                y: [0, -15, 0],
                                rotate: [-8, 8, -8],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-pink-100 text-pink-600 shadow-xl">
                                <span className="text-4xl font-bold">?</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
                            Oops! Nothing to see here
                        </h1>
                        <p className="mb-8 text-lg text-gray-600">
                            Looks like this space is empty. Let's fill it with something amazing!
                        </p>
                        <Button size="lg" className="group" onClick={()=> router.push("/dashboard")}>
                            Get Started
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.span>
                        </Button>
                    </motion.div>

                    {/* Decorative dots */}
                    <div className="absolute -right-4 top-1/4 h-24 w-24 rounded-full bg-gray-100 opacity-50" />
                    <div className="absolute -left-8 bottom-1/4 h-32 w-32 rounded-full bg-gray-100 opacity-50" />
                </motion.div>
            </div>

            <style jsx>{`
        .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0);
          background-size: 24px 24px;
        }
      `}</style>
        </div>
    )
}

