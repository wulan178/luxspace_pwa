import React from "react";

export default function Modal({ handleShowModal }) {
    return (
        <div className="fixed inset-0 z-40 min-h-screen" onClick={handleShowModal}>
            <div className="fixed inset-0 bg-black/40" />
            <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 w-max h-max p-2 bg-black rounded-sm">
                <iframe
                    title="Video"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/3h0_v1cdUIA"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-sm"
                />
            </div>
        </div>
    );
}
