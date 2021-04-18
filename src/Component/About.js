import React from 'react'

export const About = () => {
    let Mystyle = {
        maxwidth: "18rem",
    }
    return (
        <>
            <div className="container">
                <div className="card text-white bg-info mb-3 my-3" style={Mystyle}>
                    <div className="card-header">Uses of React</div>
                    <div className="card-body">
                        <p className="card-text">React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.</p>
                    </div>
                </div>
                <div className="card text-white bg-danger mb-3" style={Mystyle}>
                    <div className="card-header">Where React is used?</div>
                    <div className="card-body">
                        <ul>
                        <li className="card-text">Facebook </li>
                        <li className="card-text">Ubereats </li>
                        <li className="card-text">Netflix </li>
                        <li className="card-text">Dropbox </li>
                        <li className="card-text">Codecademy </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-white bg-warning mb-3" style={Mystyle}>
                    <div className="card-header">Future of ReactJS</div>
                    <div className="card-body">
                        <p className="card-text">React development has emerged as the future of web creation with its extra versatility and ease. Issues linked. Over 94000 pages are estimated to use ReactJS, and more than 1300 developers are actively using ReactJS for development.</p>
                    </div>
                </div>

            </div>

        </>
    )
}
