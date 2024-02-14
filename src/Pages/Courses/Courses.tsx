import React from "react";
import { useParams } from "react-router-dom";
import styles from "../../Common/styles";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ServiceCourse from "../../Service/Course/CourseService";

const Courses = () => {
  const { id } = useParams<{ id: string }>();

  const handleDeleteCourse = async () => {
    try {
      await ServiceCourse.delete(Number(id)); // Aquí debes pasar el ID del curso que deseas eliminar
      console.log("Curso eliminado con éxito");
    } catch (error) {
      console.error("Error al eliminar el curso:", error);
    }
  };

  return (
    <div style={styles.containerStudent}>
      {/* <Button variant="danger" style={styles.buttonLittle} onClick={handleDeleteCourse}>
        Borrar
      </Button> */}

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup aria-label="Basic example" style={{ width: '90%' }}>
          <Button variant="success" style={{ width: '33.33%' }}>Agregar alumno</Button>
          <Button variant="primary" style={{ width: '33.33%' }}>Volver a cursos</Button>
          <Button variant="danger" style={{ width: '33.33%' }}>Eliminar curso</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default Courses;