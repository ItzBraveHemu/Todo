import React from 'react'

export const Footer = () => {
    let Mystyle={
        position:"relative",
        top:"28vh"
    }
    return (
        <footer className="bg-dark text-light py-0.2" style={Mystyle} >
            <p className="text-center">
                Copyright &copy; TodoList.com
            </p>
        </footer>
    )
}