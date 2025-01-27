import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        return (
            <div>
                <div className="nk-content nk-content-fluid">
                    <div className="container-xl wide-xl">
                        <div className="nk-content-inner">
                            <div className="nk-content-body">
                                <div className="nk-block">
                                    <div className="row g-gs">
                                        <div className="col-md-4">
                                            <div className="card card-bordered card-full">
                                                <div className="card-inner">
                                                    <div className="card-title-group align-start mb-0">
                                                        <div className="card-title">
                                                            <h6 className="subtitle">Application Status</h6>
                                                        </div>
                                                        <div className="card-tools">
                                                            <em className="card-hint icon ni ni-help-fill" data-toggle="tooltip" data-placement="left" title="Application Status Stat" />
                                                        </div>
                                                    </div>
                                                    <div className="invest-data">
                                                        <div className="invest-data-amount g-2 text-center">
                                                            <div class="invest-data-history">
                                                                <div class="user-card user-card-s2 mb-0">
                                                                    <div class="user-avatar md bg-transparent nk-kycfm-count">
                                                                        <span class="text-dark">10</span>
                                                                    </div>
                                                                    <div class="user-info">
                                                                        <h5>All</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="invest-data-history">
                                                                <div class="user-card user-card-s2 mb-0">
                                                                    <div class="user-avatar md bg-teal">
                                                                        <span>6</span>
                                                                    </div>
                                                                    <div class="user-info">
                                                                        <h5>Available</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="invest-data-history">
                                                                <div class="user-card user-card-s2 mb-0">
                                                                    <div class="user-avatar md bg-danger">
                                                                        <span>4</span>
                                                                    </div>
                                                                    <div class="user-info">
                                                                        <h5>Critical</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card card-bordered card-full">
                                                <div className="card-inner">
                                                    <div className="card-title-group align-start mb-0">
                                                        <div className="card-title">
                                                            <h6 className="subtitle">Servers</h6>
                                                        </div>
                                                        <div className="card-tools">
                                                            <em className="card-hint icon ni ni-help-fill" data-toggle="tooltip" data-placement="left" title="Server Stat" />
                                                        </div>
                                                    </div>
                                                    <div className="invest-data">
                                                        <div className="invest-data-amount g-2 text-center">
                                                            <div class="invest-data-history">
                                                                <div class="user-card user-card-s2 mb-0">
                                                                    <div class="user-avatar md bg-transparent nk-kycfm-count">
                                                                        <span class="text-dark">4</span>
                                                                    </div>
                                                                    <div class="user-info">
                                                                        <h5>All</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="invest-data-history">
                                                                <div class="user-card user-card-s2 mb-0">
                                                                    <div class="user-avatar md bg-teal">
                                                                        <span>2</span>
                                                                    </div>
                                                                    <div class="user-info">
                                                                        <h5>Active</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="invest-data-history">
                                                                <div class="user-card user-card-s2 mb-0">
                                                                    <div class="user-avatar md bg-warning">
                                                                        <span>2</span>
                                                                    </div>
                                                                    <div class="user-info">
                                                                        <h5>Inactive</h5>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card card-bordered  card-full">
                                                <div className="card-inner">
                                                    <div className="card-title-group align-start mb-0">
                                                        <div className="card-title">
                                                            <h6 className="subtitle">Health check counts</h6>
                                                        </div>
                                                        <div className="card-tools">
                                                            <em className="card-hint icon ni ni-help-fill" data-toggle="tooltip" data-placement="left" title="Health Check Stat" />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="invest-data">
                                                        <div className="invest-data-amount g-2 text-center">
                                                            <div class="invest-data-history">
                                                                <div class="user-card user-card-s2 mb-0 border-0">
                                                                    <div class="user-avatar md bg-white">
                                                                        <span className="text-dark"><h2>60</h2></span>
                                                                    </div>
                                                                    <div class="user-info">
                                                                        <h5>Counts</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-12 col-xxl-12">
                                            <div className="card card-bordered card-full">
                                                <div className="card-inner-group">
                                                    <div className="card-inner position-relative card-tools-toggle height">
                                                        <div className="card-title-group">
                                                            <div className="card-tools">
                                                                <div className="form-inline flex-nowrap gx-3">
                                                                    <ul className="btn-toolbar gx-1">
                                                                        <li>
                                                                            <a href="#link" className="btn btn-icon search-toggle toggle-search" data-target="search"><em className="icon ni ni-search" /></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="card-tools mr-n1">
                                                                <ul className="btn-toolbar gx-1">
                                                                    <li >
                                                                       <div className="preview-icon-box">
                                                                            <div className="preview-icon-wrap">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
                                                                                <path d="M50,61H22a6,6,0,0,1-6-6V22l9-11H50a6,6,0,0,1,6,6V55A6,6,0,0,1,50,61Z" style={{fill: '#f26b6b'}} />
                                                                                <path d="M25,20.556A1.444,1.444,0,0,1,23.556,22H16l9-11h0Z" style={{fill: '#f4c9c9'}} />
                                                                                <path d="M46.3342,44.5381a4.326,4.326,0,0,0-2.5278-1.4289,22.436,22.436,0,0,0-4.5619-.3828A19.3561,19.3561,0,0,1,35.82,37.9536a56.5075,56.5075,0,0,0,1.3745-6.0858,2.339,2.339,0,0,0-.4613-1.8444,1.9429,1.9429,0,0,0-1.5162-.753h-.0014a1.6846,1.6846,0,0,0-1.3893.6966c-1.1493,1.5257-.3638,5.219-.1941,5.9457a12.6118,12.6118,0,0,0,.7236,2.1477,33.3221,33.3221,0,0,1-2.49,6.1052,20.3467,20.3467,0,0,0-5.9787,3.4413,2.5681,2.5681,0,0,0-.8861,1.8265,1.8025,1.8025,0,0,0,.6345,1.3056,2.0613,2.0613,0,0,0,1.3942.5313,2.2436,2.2436,0,0,0,1.4592-.5459,20.0678,20.0678,0,0,0,4.2893-5.3578,20.8384,20.8384,0,0,1,5.939-1.1858A33.75,33.75,0,0,0,42.96,47.7858,2.6392,2.6392,0,0,0,46.376,47.55,2.08,2.08,0,0,0,46.3342,44.5381ZM27.6194,49.6234a.8344.8344,0,0,1-1.0847.0413.4208.4208,0,0,1-.1666-.2695c-.0018-.0657.0271-.3147.4408-.736a18.0382,18.0382,0,0,1,3.7608-2.368A17.26,17.26,0,0,1,27.6194,49.6234ZM34.9023,30.848a.343.343,0,0,1,.3144-.1514.6008.6008,0,0,1,.4649.2389.853.853,0,0,1,.1683.6722v0c-.1638.92-.4235,2.381-.8523,4.1168-.0125-.05-.0249-.1-.037-.1506C34.6053,34.0508,34.3523,31.5779,34.9023,30.848ZM33.7231,43.5507a34.9732,34.9732,0,0,0,1.52-3.7664,21.2484,21.2484,0,0,0,2.2242,3.05A21.8571,21.8571,0,0,0,33.7231,43.5507Zm11.7054,2.97a1.3085,1.3085,0,0,1-1.6943.0887,33.2027,33.2027,0,0,1-3.0038-2.43,20.9677,20.9677,0,0,1,2.8346.3335,2.97,2.97,0,0,1,1.7406.9647C45.8377,46.1115,45.6013,46.3483,45.4285,46.5212Z" style={{fill: '#fff'}} /></svg>
                                                                            </div>
                                                                            <span className="preview-icon-name text-color">Export</span>
                                                                        </div>
                                                                    </li>
                                                                  <li >
                                                                       <div className="preview-icon-box">
                                                                            <div className="preview-icon-wrap">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
                                                                                <path d="M50,61H22a6,6,0,0,1-6-6V22l9-11H50a6,6,0,0,1,6,6V55A6,6,0,0,1,50,61Z" style={{fill: '#36c684'}} />
                                                                                <path d="M25,20.556A1.444,1.444,0,0,1,23.556,22H16l9-11h0Z" style={{fill: '#95e5bd'}} />
                                                                                <path d="M42,31H30a3.0033,3.0033,0,0,0-3,3V45a3.0033,3.0033,0,0,0,3,3H42a3.0033,3.0033,0,0,0,3-3V34A3.0033,3.0033,0,0,0,42,31ZM29,38h6v3H29Zm8,0h6v3H37Zm6-4v2H37V33h5A1.001,1.001,0,0,1,43,34ZM30,33h5v3H29V34A1.001,1.001,0,0,1,30,33ZM29,45V43h6v3H30A1.001,1.001,0,0,1,29,45Zm13,1H37V43h6v2A1.001,1.001,0,0,1,42,46Z" style={{fill: '#fff'}} /></svg>
                                                                            </div>
                                                                            <span className="preview-icon-name text-color">Export</span>
                                                                        </div>
                                                                    </li>
                                                                    <li className="btn-toolbar-sep" />
                                                                    <li>
                                                                        <div className="toggle-wrap">
                                                                            <a href="#cardTools" className="btn btn-icon btn-trigger toggle" data-target="cardTools"><em className="icon ni ni-menu-right" /></a>
                                                                            <div className="toggle-content" data-content="cardTools">
                                                                                <ul className="btn-toolbar gx-1">
                                                                                    <li className="toggle-close">
                                                                                        <a href="#cardTools" className="btn btn-icon btn-trigger toggle" data-target="cardTools"><em className="icon ni ni-arrow-left" /></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="dropdown">
                                                                                            <a href="#toggle" className="btn btn-trigger btn-icon dropdown-toggle" data-toggle="dropdown">
                                                                                                <em className="icon ni ni-filter-alt" />
                                                                                            </a>
                                                                                            <div className="filter-wg dropdown-menu dropdown-menu-xl dropdown-menu-right">
                                                                                                <div className="dropdown-head">
                                                                                                    <span className="sub-title dropdown-title">Filter</span>
                                                                                                </div>
                                                                                                <div className="dropdown-body dropdown-body-rg">
                                                                                                    <div className="row gx-6 gy-3">
                                                                                                        <div className="col-6">
                                                                                                            <div className="form-group">
                                                                                                                <label className="overline-title overline-title-alt">Application</label>
                                                                                                                <select className="form-select form-select-sm">
                                                                                                                    <option value="any">Any Application</option>
                                                                                                                    <option value="application_name_1">Application 1</option>
                                                                                                                    <option value="application_name_2">Application 2</option>
                                                                                                                    <option value="application_name_3">Application 3</option>
                                                                                                                </select>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-6">
                                                                                                            <div className="form-group">
                                                                                                                <label className="overline-title overline-title-alt">Servers</label>
                                                                                                                <select className="form-select form-select-sm">
                                                                                                                    <option value="any">Any Servers</option>
                                                                                                                    <option value="server_1">Server 1</option>
                                                                                                                    <option value="server_2">Server 2</option>
                                                                                                                </select>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-8">
                                                                                                            <div className="form-group">
                                                                                                                <label className="overline-title overline-title-alt">Health Check Status</label>
                                                                                                                <select className="form-select form-select-sm">
                                                                                                                    <option value="any">Any Health Check</option>
                                                                                                                    <option value="healthy">Healthy</option>
                                                                                                                    <option value="critical">Critical</option>
                                                                                                                </select>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-12">
                                                                                                            <div className="form-group">
                                                                                                                <button type="button" className="btn btn-secondary">Filter</button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="dropdown-foot between">
                                                                                                    <a className="clickable" href="#link">Reset Filter</a>
                                                                                                    <a href="#link">Save Filter</a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="dropdown">
                                                                                            <a href="#link" className="btn btn-trigger btn-icon dropdown-toggle" data-toggle="dropdown">
                                                                                                <em className="icon ni ni-setting" />
                                                                                            </a>
                                                                                            <div className="dropdown-menu dropdown-menu-xs dropdown-menu-right">
                                                                                                <ul className="link-check">
                                                                                                    <li><span>Show</span></li>
                                                                                                    <li className="active"><a href="#link">10</a></li>
                                                                                                    <li><a href="#link">20</a></li>
                                                                                                    <li><a href="#link">50</a></li>
                                                                                                </ul>
                                                                                                <ul className="link-check">
                                                                                                    <li><span>Order</span></li>
                                                                                                    <li className="active"><a href="#link">DESC</a></li>
                                                                                                    <li><a href="#link">ASC</a></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="card-search search-wrap" data-search="search">
                                                            <div className="card-body">
                                                                <div className="search-content">
                                                                    <a href="#link" className="search-back btn btn-icon toggle-search" data-target="search"><em className="icon ni ni-arrow-left" /></a>
                                                                    <input type="text" className="form-control border-transparent form-focus-none" placeholder="Enter a search keyword" />
                                                                    <button className="search-submit btn btn-icon"><em className="icon ni ni-search" /></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-inner p-0">
                                                        <table className="table table-orders">
                                                            <thead className="tb-odr-head">
                                                                <tr className="tb-odr-item">
                                                                    <th className="tb-odr-info">
                                                                        <span className="tb-odr-id">S/N</span>
                                                                    </th>
                                                                    <th className="tb-odr-info">
                                                                        <span className="tb-odr-date d-none d-md-inline-block">APPLICATION</span>
                                                                    </th>
                                                                    <th className="tb-odr-amount">
                                                                        <span className="tb-odr-total">SERVERS MAPPED</span>
                                                                        <span className="tb-odr-total d-none d-md-inline-block">LAST SCAN DATE</span>
                                                                    </th>
                                                                    <th className="tb-odr-amount">
                                                                        <span className="tb-odr-total">STATUS</span>
                                                                        <span className="tb-odr-total d-none d-md-inline-block">ACTION</span>
                                                                    </th>
                                                                    <th className="tb-odr-action">&nbsp;</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="tb-odr-body">
                                                                <tr className="tb-odr-item">
                                                                    <td className="tb-odr-info">
                                                                        <span className="tb-odr-id">1</span>
                                                                    </td>
                                                                    <td className="tb-odr-info">
                                                                        <div class="nk-reply-header">
                                                                            <div class="user-card">
                                                                                <div class="user-avatar sm bg-blue">
                                                                                    <span>AN</span>
                                                                                </div>
                                                                                <div class="user-name"><em class="icon text-success ni ni-circle-fill"></em> Application name goes here</div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="tb-odr-amount">
                                                                        <span className="tb-odr-total">
                                                                            <span><a href="#link">3 Servers</a></span>
                                                                        </span>
                                                                        <span className="tb-odr-total">
                                                                            <span>11/12/20 3: 57:29 PM</span>
                                                                        </span>
                                                                    </td>
                                                                    <td className="tb-odr-amount">
                                                                        <span className="tb-odr-total">
                                                                            <span><em class="icon text-success ni ni-check-circle-fill"></em> Healthy</span>
                                                                        </span>
                                                                        <div className="tb-odr-btns d-none d-md-inline">
                                                                            <a href="#link" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#check-result"><em class="icon ni ni-eye"></em><span>View Result</span> </a>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <a href="#link" className="text-soft dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown" data-offset="-8,0" aria-expanded="false"><em className="icon ni ni-more-v" /></a>
                                                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs" style={{}}>
                                                                                <ul className="link-list-plain">
                                                                                    <li><a href="#link" data-toggle="modal" data-target="#check-result"><span>View Result</span></a></li>
                                                                                    <li><a href="#link" data-toggle="modal" data-target="#deactivate"><span>Deactivate</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                           
                                                                </tr>
                                                            
                                                                <tr className="tb-odr-item">
                                                                    <td className="tb-odr-info">
                                                                        <span className="tb-odr-id">2</span>
                                                                    </td>
                                                                    <td className="tb-odr-info">
                                                                        <div class="nk-reply-header">
                                                                            <div class="user-card">
                                                                                <div class="user-avatar sm bg-blue">
                                                                                    <span>AN</span>
                                                                                </div>
                                                                                <div class="user-name"><em class="icon text-success ni ni-circle-fill"></em> Application name goes here</div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="tb-odr-amount">
                                                                        <span className="tb-odr-total">
                                                                            <span><a href="#link">3 Servers</a></span>
                                                                        </span>
                                                                        <span className="tb-odr-total">
                                                                            <span>11/12/20 3: 57:29 PM</span>
                                                                        </span>
                                                                    </td>
                                                                    <td className="tb-odr-amount">
                                                                        <span className="tb-odr-total">
                                                                            <span><em class="icon text-warning ni ni-alert-fill-c"></em> </span>
                                                                        </span>
                                                                        <div className="tb-odr-btns d-none d-md-inline">
                                                                            <a href="#link" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#check-result"><em class="icon ni ni-eye"></em><span>View Result</span> </a>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <a href="#link" className="text-soft dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown" data-offset="-8,0" aria-expanded="false"><em className="icon ni ni-more-v" /></a>
                                                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs" style={{}}>
                                                                                <ul className="link-list-plain">
                                                                                    <li><a href="#link" data-toggle="modal" data-target="#check-result"><span>View Result</span></a></li>
                                                                                    <li><a href="#link" data-toggle="modal" data-target="#deactivate"><span>Deactivate</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                           
                                                                </tr>
                                                            
                                                                <tr className="tb-odr-item">
                                                                    <td className="tb-odr-info">
                                                                        <span className="tb-odr-id">3</span>
                                                                    </td>
                                                                    <td className="tb-odr-info">
                                                                        <div class="nk-reply-header">
                                                                            <div class="user-card">
                                                                                <div class="user-avatar sm bg-blue">
                                                                                    <span>AN</span>
                                                                                </div>
                                                                                <div class="user-name"><em class="icon text-success ni ni-circle-fill"></em> Application name goes here</div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="tb-odr-amount">
                                                                        <span className="tb-odr-total">
                                                                            <span><a href="#link">3 Servers</a></span>
                                                                        </span>
                                                                        <span className="tb-odr-total">
                                                                            <span>11/12/20 3: 57:29 PM</span>
                                                                        </span>
                                                                    </td>
                                                                    <td className="tb-odr-amount">
                                                                        <span className="tb-odr-total">
                                                                            <span><em class="icon text-success ni ni-check-circle-fill"></em> </span>
                                                                        </span>
                                                                        <div className="tb-odr-btns d-none d-md-inline">
                                                                            <a href="#link" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#check-result"><em class="icon ni ni-eye"></em><span>View Result</span> </a>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <a href="#link" className="text-soft dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown" data-offset="-8,0" aria-expanded="false"><em className="icon ni ni-more-v" /></a>
                                                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs" style={{}}>
                                                                                <ul className="link-list-plain">
                                                                                    <li><a href="#link" data-toggle="modal" data-target="#check-result"><span>View Result</span></a></li>
                                                                                    <li><a href="#link" data-toggle="modal" data-target="#deactivate"><span>Deactivate</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                           
                                                                </tr>
                                                            
                                                                <tr className="tb-odr-item">
                                                                    <td className="tb-odr-info">
                                                                        <span className="tb-odr-id">4</span>
                                                                    </td>
                                                                    <td className="tb-odr-info">
                                                                        <div class="nk-reply-header">
                                                                            <div class="user-card">
                                                                                <div class="user-avatar sm bg-blue">
                                                                                    <span>AN</span>
                                                                                </div>
                                                                                <div class="user-name"><em class="icon text-success ni ni-circle-fill"></em> Application name goes here</div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="tb-odr-amount">
                                                                        <span className="tb-odr-total">
                                                                            <span><a href="#link">3 Servers</a></span>
                                                                        </span>
                                                                        <span className="tb-odr-total">
                                                                            <span>11/12/20 3: 57:29 PM</span>
                                                                        </span>
                                                                    </td>
                                                                    <td className="tb-odr-amount">
                                                                        <span className="tb-odr-total">
                                                                            <span><em class="icon text-success ni ni-check-circle-fill"></em> </span>
                                                                        </span>
                                                                        <div className="tb-odr-btns d-none d-md-inline">
                                                                            <a href="#link" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#check-result"><em class="icon ni ni-eye"></em><span>View Result</span> </a>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <a href="#link" className="text-soft dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown" data-offset="-8,0" aria-expanded="false"><em className="icon ni ni-more-v" /></a>
                                                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs" style={{}}>
                                                                                <ul className="link-list-plain">
                                                                                    <li><a href="#link" data-toggle="modal" data-target="#check-result"><span>View Result</span></a></li>
                                                                                    <li><a href="#link" data-toggle="modal" data-target="#deactivate"><span>Deactivate</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                           
                                                                </tr>
                                                            
                                                                <tr className="tb-odr-item">
                                                                    <td className="tb-odr-info">
                                                                        <span className="tb-odr-id">5</span>
                                                                    </td>
                                                                    <td className="tb-odr-info">
                                                                        <div class="nk-reply-header">
                                                                            <div class="user-card">
                                                                                <div class="user-avatar sm bg-danger">
                                                                                    <span>AN</span>
                                                                                </div>
                                                                                <div class="user-name"><em class="icon text-danger ni ni-circle-fill"></em> Application name goes here</div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="tb-odr-amount">
                                                                        <span className="tb-odr-total">
                                                                            <span><a href="#link">3 Servers</a></span>
                                                                        </span>
                                                                        <span className="tb-odr-total">
                                                                            <span>11/12/20 3: 57:29 PM</span>
                                                                        </span>
                                                                    </td>
                                                                    <td className="tb-odr-amount">
                                                                        <span className="tb-odr-total">
                                                                            <span><em class="icon text-success ni ni-check-circle-fill"></em> </span>
                                                                        </span>
                                                                        <div className="tb-odr-btns d-none d-md-inline">
                                                                            <a href="#link" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#check-result"><em class="icon ni ni-eye"></em><span>View Result</span> </a>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <a href="#link" className="text-soft dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown" data-offset="-8,0" aria-expanded="false"><em className="icon ni ni-more-v" /></a>
                                                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs" style={{}}>
                                                                                <ul className="link-list-plain">
                                                                                    <li><a href="#link" data-toggle="modal" data-target="#check-result"><span>View Result</span></a></li>
                                                                                    <li><a href="#link" data-toggle="modal" data-target="#deactivate"><span>Deactivate</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                           
                                                                </tr>
                                                            
                                                            
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="card-inner">
                                                        <div className="nk-block-between-md g-3">
                                                            <div className="g">
                                                            <ul className="pagination justify-content-center justify-content-md-start">
                                                                <li className="page-item"><a className="page-link" href="#link">Prev</a></li>
                                                                <li className="page-item active"><a className="page-link" href="#link">1</a></li>
                                                                <li className="page-item"><a className="page-link" href="#link">2</a></li>
                                                                <li className="page-item"><span className="page-link"><em className="icon ni ni-more-h" /></span></li>
                                                                <li className="page-item"><a className="page-link" href="#link">6</a></li>
                                                                <li className="page-item"><a className="page-link" href="#link">7</a></li>
                                                                <li className="page-item"><a className="page-link" href="#link">Next</a></li>
                                                            </ul>{/* .pagination */}
                                                            </div>
                                                            <div className="g">
                                                                <div className="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
                                                                    <div className="g">Showing 10 of 5000 Entries</div>
                                                                <div>Page</div>
                                                                <div>
                                                                    <select className="form-select form-select-sm" data-search="on" data-dropdown="xs center">
                                                                        <option value="page-1">1</option>
                                                                        <option value="page-2">2</option>
                                                                        <option value="page-4">4</option>
                                                                        <option value="page-5">5</option>
                                                                        <option value="page-6">6</option>
                                                                        <option value="page-7">7</option>
                                                                        <option value="page-8">8</option>
                                                                        <option value="page-9">9</option>
                                                                        <option value="page-10">10</option>
                                                                        <option value="page-11">11</option>
                                                                        <option value="page-12">12</option>
                                                                        <option value="page-13">13</option>
                                                                        <option value="page-14">14</option>
                                                                        <option value="page-15">15</option>
                                                                        <option value="page-16">16</option>
                                                                        <option value="page-17">17</option>
                                                                        <option value="page-18">18</option>
                                                                        <option value="page-19">19</option>
                                                                        <option value="page-20">20</option>
                                                                    </select>
                                                                </div>
                                                                <div>OF 102</div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" tabIndex={-1} id="deactivate">
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <a href="#close" className="close" data-dismiss="modal" aria-label="Close"><em className="icon ni ni-cross" /></a>
                            <div className="modal-body modal-body-md">
                                <h4 className="nk-modal-title title">Deactivate Server</h4>
                                <p><strong>Are you sure you want to deactivate server name1?</strong></p>
                                <p>If you continue, you will no longer receive data from this server.</p>
                                <div className="form">
                                <ul className="align-center flex-wrap g-3">
                                    <li>
                                        <button className="btn btn-primary" >Deactive</button>
                                    </li>
                                    <li>
                                        <a href="#cancel" className="btn btn-light" data-dismiss="modal">Never mind, don't deactivate</a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" tabIndex={-1} role="dialog" id="check-result">
                    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                        <div className="modal-content">
                            <a href="#modal" className="close" data-dismiss="modal"><em className="icon ni ni-cross-sm" /></a>
                            <div className="modal-body modal-body-lg">
                                <h5 className="title">Health Check Result</h5>

                                <div className="row g-3 align-center">
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-7">
                                        <div className="card card-bordered card-full">
                                            <div className="card-inner-group padding-20">
                                                <div className="card-inner">
                                                    <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                        <div className="nk-block-text">
                                                            <h6>App Name 1 <em class="icon text-success ni ni-circle-fill"></em></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-inner">
                                                    <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                        <div className="nk-block-text">
                                                            <h6>End Point</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card-inner">
                                                    <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                        <div className="nk-block-text">
                                                            <h6><em class="icon ni ni-arrow-long-right"></em> Server 1 <em class="icon text-success ni ni-circle-fill"></em></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-inner">
                                                    <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                        <div className="nk-block-text">
                                                            <h6><em class="icon ni ni-arrow-long-right"></em> Server 2 <em class="icon text-danger ni ni-cross"></em></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-inner">
                                                    <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                        <div className="nk-block-text">
                                                            <h6><em class="icon ni ni-arrow-long-right"></em> Server 3 <em class="icon ni ni-check"></em></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-inner">
                                                    <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                        <div className="nk-block-text">
                                                            <h6><em class="icon ni ni-arrow-long-right"></em> Server 4 <em class="icon ni ni-check"></em></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                        <div className="card-inner">
                                            <div className="between-center flex-wrap flex-md-nowrap g-3">
                                                <div className="nk-block-text">

                                                </div>
                                                <div className="nk-block-actions">
                                                    <ul className="align-center gx-3">
                                                        <li className="order-md-last">
                                                            <div className="nk-block-text">
                                                                <h6 className="text-info"><em class="icon ni ni-redo"></em> Refresh </h6>
                                                            </div>
                                                        </li>
                                                    </ul>
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
                                                <button type="button" className="btn btn-lg btn-primary">Cancel</button>
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
}
