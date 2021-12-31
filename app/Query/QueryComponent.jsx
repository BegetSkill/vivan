import React from 'react'

export class QueryComponent extends React.Component {

    render() {
        return (
            <div className="row">
                <form>
                    <div className="col-xs-12 col-md-3">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    Query
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div className="">
                                            <label for="txtFullName" className="form-label">Full Name</label>
                                            <input type="text" className="form-control" id="txtFullName" />
                                        </div>
                                        <div className="">
                                            <label for="txtEmailId" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="txtEmailId" />
                                        </div>
                                        <div className="">
                                            <label for="txtPhone" className="form-label">Phone</label>
                                            <input type="email" className="form-control" id="txtPhone" />
                                        </div>
                                        <div className="">
                                            <label for="txtPhone" className="form-label">Query Type</label>
                                            <select className="form-select" aria-label="Disabled select example">
                                                <option selected>--Select--</option>
                                                <option value="1">Pharmaceutical</option>
                                                <option value="2">Technical</option>
                                                <option value="3">Sale</option>
                                                <option value="3">Other</option>
                                            </select>
                                        </div>
                                        <div className="">
                                            <label for="txtQuery" className="form-label">Example textarea</label>
                                            <textarea className="form-control" id="txtQuery" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg float-right">Submit</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        );
    }
}