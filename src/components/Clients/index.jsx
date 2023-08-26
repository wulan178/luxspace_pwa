import React from "react";
import { clientsImage } from "../../utils/constants";

export default function Clients() {
    return (
        <section className="container mx-auto">
            <div className="flex justify-center flex-wrap">
                {clientsImage.map((item, i) => (
                    <div key={i} className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
                        <img src={`./images/content/${item}.svg`} alt={item.replace("-", " ")} className="mx-auto" />
                    </div>
                ))}
            </div>
        </section>
    );
}
