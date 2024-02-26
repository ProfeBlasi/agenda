import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ServiceCourse from "../../Service/Course/CourseService";
import { ICourse } from "../../Service/Course/types";
import styles from "../../Common/styles";
import Card from 'react-bootstrap/Card';

const Home = () => {
    const [courses, setCourses] = useState<ICourse[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ServiceCourse.getAll();
                setCourses(response);
                setError(null);
            } catch (error) {
                console.error("Error al realizar la llamada", error);
                setError("Error al cargar los cursos. Por favor, inténtalo de nuevo más tarde.");
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{ ...styles.container, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {error ? (
                <p style={styles.paragraph}>{error}</p>
            ) : (
                courses.length > 0 ? (
                    courses.map((course, index) => (
                        <div key={index} style={{ margin: '10px' }}>
                            <Link to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
                                <Card style={{ width: '300px', borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
                                    <div style={{ backgroundColor: '#F5F5F7', padding: '20px', borderBottom: '1px solid #E0E0E0' }}>
                                        <h3 style={{ margin: '0', color: '#333', fontSize: '18px', fontWeight: '600' }}>{course.age}° {course.section}</h3>
                                        <p style={{ margin: '0', color: '#666', fontSize: '14px', marginTop: '5px' }}>{course.shift}</p>
                                    </div>
                                    <div style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
                                        <p style={{ margin: '0', color: '#333', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>{course.school}</p>
                                    </div>
                                </Card>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No hay cursos disponibles.</p>
                )
            )}
        </div>
    );
}

export default Home;