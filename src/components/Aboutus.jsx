import React from "react"
import { IoCheckmarkOutline } from "react-icons/io5";

export default function AboutUs() {
    return (
        <main className="flex flex-col gap-20 md:gap-32 about_wrap">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Generative AI App</h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Our generative AI app is a powerful tool that helps you create stunning content with ease. Powered by
                            advanced machine learning algorithms, our app can generate everything from engaging articles to
                            captivating images and more.
                        </p>

                    </div>

                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Key Features</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Unlock Your Creativity</h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Our generative AI app provides a suite of powerful features to help you create content with ease. From
                                natural language processing to image generation, our app has the tools you need to bring your ideas to
                                life.
                            </p>
                        </div>
                        <ul className="grid gap-2 py-4">
                            <li>

                                {/* <CheckIcon className="mr-2 inline-block h-4 w-4" /> */}
                                <IoCheckmarkOutline />
                                Generate engaging articles, stories, and more with our advanced language model.
                            </li>
                            <li>
                                {/* <CheckIcon className="mr-2 inline-block h-4 w-4" /> */}
                                <IoCheckmarkOutline />
                                Create stunning images and visuals using our state-of-the-art image generation capabilities.
                            </li>
                            <li>
                                {/* <CheckIcon className="mr-2 inline-block h-4 w-4" /> */}
                                <IoCheckmarkOutline />
                                Collaborate with your team and share your creations seamlessly.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Our Technology
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powered by Advanced AI</h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Our generative AI app is built on a foundation of cutting-edge machine learning and natural language
                                processing technologies. We use the latest advancements in deep learning to power our industry-leading
                                capabilities.
                            </p>
                        </div>
                        <ul className="grid gap-2 py-4">
                            <li>
                                {/* <CheckIcon className="mr-2 inline-block h-4 w-4" /> */}
                                <IoCheckmarkOutline />
                                Leveraging large language models for natural language generation.
                            </li>
                            <li>
                                {/* <CheckIcon className="mr-2 inline-block h-4 w-4" /> */}
                                <IoCheckmarkOutline />
                                Utilizing state-of-the-art computer vision techniques for image generation.
                            </li>
                            <li>
                                {/* <CheckIcon className="mr-2 inline-block h-4 w-4" /> */}
                                <IoCheckmarkOutline />
                                Deploying our models on a scalable, high-performance infrastructure.
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Story</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Empowering Creativity</h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Our generative AI app was founded with the mission of empowering creativity and helping people unlock
                                their full potential. We believe that the future of content creation lies in the intersection of human
                                ingenuity and artificial intelligence.
                            </p>
                        </div>
                        <ul className="grid gap-2 py-4">
                            <li>
                                {/* <CheckIcon className="mr-2 inline-block h-4 w-4" /> */}
                                <IoCheckmarkOutline />
                                Founded in 2021 by a team of AI and machine learning experts.
                            </li>
                            <li>
                                {/* <CheckIcon className="mr-2 inline-block h-4 w-4" /> */}
                                <IoCheckmarkOutline />
                                Driven by a passion for innovation and a commitment to empowering creators.
                            </li>
                            <li>
                                {/* <CheckIcon className="mr-2 inline-block h-4 w-4" /> */}
                                <IoCheckmarkOutline />
                                Dedicated to pushing the boundaries of what's possible with generative AI.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

