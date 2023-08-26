import React from "react";
import { Link } from "react-router-dom";
import { breadcrumb } from "../../utils/constants";

export default function Breadcrumb() {
    return (
        <section className="bg-gray-100 py-8 px-4">
            <div className="container mx-auto">
                <ul className="breadcrumb">
                    {breadcrumb.map((item, i) => (
                        <li key={i} aria-label="current-page">
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
