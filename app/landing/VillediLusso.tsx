import React from 'react'
import style from './style.module.css'


export default function VillediLusso({ images, speed = 5000 }) {
    return (
        <>
            <div className="inner">
                <div className="wrapper">
                    <section style={{ "--speed": `${speed}ms` }}>
                        {images.map(({ id, image }) => (
                            <div className="image" key={id}>
                                <img src={image} alt={id} />
                            </div>
                        ))}
                    </section>
                    <section style={{ "--speed": `${speed}ms` }}>
                        {images.map(({ id, image }) => (
                            <div className="image" key={id}>
                                <img src={image} alt={id} />
                            </div>
                        ))}
                    </section>
                    <section style={{ "--speed": `${speed}ms` }}>
                        {images.map(({ id, image }) => (
                            <div className="image" key={id}>
                                <img src={image} alt={id} />
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </>
    );
}
