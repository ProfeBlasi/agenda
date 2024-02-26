import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { IStudent } from "../../Service/Student/types";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


interface ListStudentProps {
    students: IStudent[];
}

const ListStudent: React.FC<ListStudentProps> = ({ students }) => {
    console.log(students);
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            style={{
                margin: 'auto', textAlign: 'center', width: '90%', fontSize: '1.6rem'
            }}

        >
            <Tab eventKey="1° Cuatri" title="1° Cuatri">
                <p>Estoy en el primer cuatri</p>
            </Tab>
            <Tab eventKey="2° Cuatri" title="2° Cuatri">
                Tab content for Profile
            </Tab>
            <Tab eventKey="home" title="Cierre">

                {students && students.length > 0 ? (
                    students.map((student, index) => (
                        <Card key={index} style={{ borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
                            <div style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
                                <p style={{ margin: '0', color: '#333', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>{student.lastNameFirstName}</p>
                            </div>
                        </Card>
                    ))
                ) : (
                    <p>No hay alumnos disponibles.</p>
                )}
            </Tab>
        </Tabs>
    );
}

export default ListStudent;