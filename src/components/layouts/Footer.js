import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="nk-footer nk-footer-fluid bg-lighter">
                <div className="container-xl">
                    <div className="nk-footer-wrap">
                        <div className="nk-footer-copyright"> © 2020 SmartCheck. Dashboard by <a href="#creator">@codeBrain</a>
                        </div>
                        <div className="nk-footer-links">
                            <ul className="nav nav-sm">
                                <li className="nav-item"><a className="nav-link" href="#terms">Terms</a></li>
                                <li className="nav-item"><a className="nav-link" href="#privacy">Privacy</a></li>
                                <li className="nav-item"><a className="nav-link" href="#help">Help</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
