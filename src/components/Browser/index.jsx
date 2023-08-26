import React from "react";
import { browser } from "../../utils/constants";

export default function Browser() {
    return (
        <section className="flex bg-gray-100 py-16 px-4 md:px-10" id="browse-the-room">
            <div className="container mx-auto">
                <div className="flex flex-start mb-4">
                    <h3 className="text-2xl capitalize font-semibold">
                        browse the room <br />
                        that we designed for you
                    </h3>
                </div>
                <div className="grid grid-rows-2 grid-cols-9 gap-4">
                    {browser.map((item, i) => (
                        <div key={i} className={`relative col-span-9 row-span-1 ${item.style}`}>
                            <div className="card-shadow rounded-xl">
                                <img
                                    src={`./images/content/${item.img}`}
                                    alt=""
                                    className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
                                />
                            </div>
                            <div className="overlay left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72">
                                <h5 className="text-lg font-semibold">{item.name}</h5>
                                <span>{item.number} items</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
