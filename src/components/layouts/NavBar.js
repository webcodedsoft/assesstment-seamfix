import React from 'react'
import logo from '../../images/smartcheck.svg';

export default function NavBar() {
    return (
        <div>
            <div className="nk-header nk-header-fluid is-theme">
                <div className="container-xl wide-xl">
                    <div className="nk-header-wrap">
                        <div className="nk-menu-trigger mr-sm-2 d-lg-none">
                            <a href="#headerNav" className="nk-nav-toggle nk-quick-nav-icon" data-target="headerNav"><em className="icon ni ni-menu" /></a>
                        </div>
                        <div className="nk-header-brand">
                            <a href="/" className="logo-link">
                                <img className="logo-light logo-img" src={logo} alt="logo" />
                                <img className="logo-dark logo-img" src={logo} alt="logo-dark" />
                            </a>
                        </div>
                        <div className="nk-header-menu" data-content="headerNav">
                            <div className="nk-header-mobile">
                                <div className="nk-header-brand">
                                    <a href="/" className="logo-link">
                                        <img className="logo-light logo-img" src={logo} alt="logo" />
                                        <img className="logo-dark logo-img" src={logo} alt="logo-dark" />
                                    </a>
                                </div>
                                <div className="nk-menu-trigger mr-n2">
                                    <a href="#headerNav" className="nk-nav-toggle nk-quick-nav-icon" data-target="headerNav"><em className="icon ni ni-arrow-left" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nk-header nk-header-fluid is-light">
                <div className="container-xl wide-xl">
                    <div className="nk-header-wrap">
                        <div className="nk-header-menu" data-content="headerNav">
                            <ul className="nk-menu nk-menu-main ui-s2">
                                <li className="nk-menu-item">
                                    <a href="/" className="nk-menu-link" data-original-title="" title="">
                                        <span className="nk-menu-text"><em className="icon ni ni-home"></em> Home</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="/server" className="nk-menu-link" data-original-title="" title="">
                                        <span className="nk-menu-text"><em className="icon ni ni-server"></em> Server</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="/application" className="nk-menu-link" data-original-title="" title="">
                                        <span className="nk-menu-text"><em className="icon ni ni-browser"></em> Application</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="nk-header-tools">
                            <a href="#headerNav" data-toggle="modal" data-target="#check-health-status" className="btn btn-primary"><span>Check Health Status</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" tabIndex={-1} role="dialog" id="check-health-status">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">
                        <a href="#modal" className="close" data-dismiss="modal"><em className="icon ni ni-cross-sm" /></a>
                        <div className="modal-body modal-body-lg">
                            <h5 className="title">Conduct Health Check</h5>
                    
                            <div className="row g-3 align-center">
                                <div className="col-lg-2">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="site-name">Applications</label>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="custom-control custom-control-sm custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="com-email-1" />
                                        <label className="custom-control-label" htmlFor="com-email-1">All Applications</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-3 align-center">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-7">
                                    <p>Select Application</p>
                                    <div className="card card-bordered">
                                        <div className="card-inner-group">
                                            <div className="card-inner">
                                                <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                    <div className="nk-block-text">
                                                        <h6>App Name 1</h6>
                                                    </div>
                                                    <div className="nk-block-actions">
                                                        <ul className="align-center gx-3">
                                                            <li className="order-md-last">
                                                                <div className="custom-control custom-switch mr-n2">
                                                                    <input type="checkbox" className="custom-control-input" defaultChecked id="app-name-1" />
                                                                    <label className="custom-control-label" htmlFor="app-name-1" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-inner">
                                                <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                    <div className="nk-block-text">
                                                        <h6>App Name 2</h6>
                                                    </div>
                                                    <div className="nk-block-actions">
                                                        <ul className="align-center gx-3">
                                                            <li className="order-md-last">
                                                                <div className="custom-control custom-switch mr-n2">
                                                                    <input type="checkbox" className="custom-control-input" defaultChecked id="app-name-2" />
                                                                    <label className="custom-control-label" htmlFor="app-name-2" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="card-inner">
                                                <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                    <div className="nk-block-text">
                                                        <h6>App Name 2</h6>
                                                    </div>
                                                    <div className="nk-block-actions">
                                                        <ul className="align-center gx-3">
                                                            <li className="order-md-last">
                                                                <div className="custom-control custom-switch mr-n2">
                                                                    <input type="checkbox" className="custom-control-input" defaultChecked id="app-name-3" />
                                                                    <label className="custom-control-label" htmlFor="app-name-3" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-inner">
                                                <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                    <div className="nk-block-text">
                                                        <h6>App Name 2</h6>
                                                    </div>
                                                    <div className="nk-block-actions">
                                                        <ul className="align-center gx-3">
                                                            <li className="order-md-last">
                                                                <div className="custom-control custom-switch mr-n2">
                                                                    <input type="checkbox" className="custom-control-input" defaultChecked id="app-name-4" />
                                                                    <label className="custom-control-label" htmlFor="app-name-4" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row g-3 align-center">
                                <div className="col-lg-2">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="server">Server</label>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="custom-control custom-control-sm custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="server" />
                                        <label className="custom-control-label" htmlFor="server">All Server</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-3 align-center">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-7">
                                    <p>Select Server</p>
                                    <div className="card card-bordered">
                                        <div className="card-inner-group">
                                            <div className="card-inner">
                                                <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                    <div className="nk-block-text">
                                                        <h6>Server 1</h6>
                                                    </div>
                                                    <div className="nk-block-actions">
                                                        <ul className="align-center gx-3">
                                                            <li className="order-md-last">
                                                                <div className="custom-control custom-switch mr-n2">
                                                                    <input type="checkbox" className="custom-control-input" defaultChecked id="server-1" />
                                                                    <label className="custom-control-label" htmlFor="server-1" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-inner">
                                                <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                    <div className="nk-block-text">
                                                        <h6>Server 2</h6>
                                                    </div>
                                                    <div className="nk-block-actions">
                                                        <ul className="align-center gx-3">
                                                            <li className="order-md-last">
                                                                <div className="custom-control custom-switch mr-n2">
                                                                    <input type="checkbox" className="custom-control-input" defaultChecked id="server-2" />
                                                                    <label className="custom-control-label" htmlFor="server-2" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="card-inner">
                                                <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                    <div className="nk-block-text">
                                                        <h6>Server 3</h6>
                                                    </div>
                                                    <div className="nk-block-actions">
                                                        <ul className="align-center gx-3">
                                                            <li className="order-md-last">
                                                                <div className="custom-control custom-switch mr-n2">
                                                                    <input type="checkbox" className="custom-control-input" defaultChecked id="server-3" />
                                                                    <label className="custom-control-label" htmlFor="server-3" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="card-inner">
                                                <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                    <div className="nk-block-text">
                                                        <h6>Server 4</h6>
                                                    </div>
                                                    <div className="nk-block-actions">
                                                        <ul className="align-center gx-3">
                                                            <li className="order-md-last">
                                                                <div className="custom-control custom-switch mr-n2">
                                                                    <input type="checkbox" className="custom-control-input" defaultChecked id="server-4" />
                                                                    <label className="custom-control-label" htmlFor="server-4" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="nk-block-head-content margin-top-50">
                                <div className="nk-block-title-group">
                                    <h6 className="nk-block-title title">.</h6>
                                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                                        <li>
                                            <a href="#cancel" data-dismiss="modal" className="link link-light">Cancel</a>
                                        </li>
                                        <li>
                                            <button type="button" className="btn btn-lg btn-primary">Check Health Status</button>
                                        </li>
                                    </ul>
                                </div>
                               
                            </div>
                    </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
