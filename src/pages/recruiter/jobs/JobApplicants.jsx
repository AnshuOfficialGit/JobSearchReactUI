import React from 'react'
import Header from '../../../components/authLayout/Header'
import Footer from '../../../components/authLayout/Footer'
import DataTable from "react-data-table-component";
import { Link } from 'react-router-dom';
const JobApplicants = () => {

    const columns = [
        {
            name: "ID",
            selector: (row) => row.personID,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => row.fullName,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.height,
            sortable: true,
        },
        {
            name: "Mobile",
            selector: (row) => row.eyeColor,
            sortable: true,
        },
        {
            name: "Application Received",
            selector: (row) => row.date,
            sortable: true,
        },
        {
            name: "Actions",
            button: true,
            cell: (row) => (
                <>
                    <Link to={`/recruiter/applicant/details/1`}>
                        <i class="fa-solid fa-circle-info"></i>
                    </Link>

                </>
            ),
        },
    ];

    const rows = [
        {
            personID: 1,
            fullName: "Kate Shein",
            height: "anshusharma@gmail.com",
            eyeColor: "7007976332",
            date: "20-04-2024",
        },

        {
            personID: 2,
            fullName: "Isabella Thompson",
            height: "anshu@gmail.com",
            eyeColor: "7007976332",
            date: "20-04-2024",
        },

    ];
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6">
                        <h3>Applicants List of Job Title -:</h3>
                    </div>
                    <div className="col-sm-6 text-end">
                        <Link to="/recruiter/jobs">Go Back</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">

                        <div className="text-end">
                            <input type="text" />
                        </div>
                        <DataTable
                            columns={columns}
                            data={rows}
                            fixedHeader

                            pagination
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default JobApplicants