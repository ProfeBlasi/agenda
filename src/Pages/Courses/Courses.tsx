import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../../Common/styles";
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import ServiceCourse from "../../Service/Course/CourseService";
import { IStudent } from "../../Service/Student/types";
import ServiceStudent from "../../Service/Student/StudentService";
import ListStudent from "./ListStudent";
import ServiceStudentCourse from "../../Service/StudentCourse/StudentCourseService";
import { IStudentCourse } from "../../Service/StudentCourse/types";

const Courses = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [students, setStudents] = useState<IStudent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id !== undefined) {
          const response = await ServiceStudent.getAll(parseInt(id, 10));
          setStudents(response);
        }
      } catch (error) {
        console.error("Error al realizar la llamada", error);
      }
    };

    fetchData();
  }, [id]); // Agregar 'id' al arreglo de dependencias  

  const getButtonStyles = () => {
    return {
      width: '30%',
      padding: '10px',
      margin: '10px',
      fontSize: '1.2rem' // Puedes ajustar el tamaño de la letra aquí
    };
  }

  const handlePostStudent = async () => {
    Swal.fire({
      title: "Ingrese apellido y nombre",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `Agregar`
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const lastNameFirstName = result.value;
        try {
          // Crear un objeto con solo el atributo lastNameFirstName
          const studentData: Partial<IStudent> = { lastNameFirstName };
          var studentResponse = await ServiceStudent.post(studentData);
          const studentId = await studentResponse.data.id;
          console.log("Respnse " + studentId);
          const courseId = Number(id);
          const studentCourseData: Partial<IStudentCourse> = { studentId, courseId };
          console.log("id " + studentCourseData);
          await ServiceStudentCourse.post(studentCourseData);
          console.log('Datos del estudiante enviados correctamente.');
          Swal.fire("Saved!", "", "success");
        } catch (error) {
          console.error('Error al enviar datos del estudiante:', error);
          Swal.fire("Error al guardar", "", "error");
        }
        Swal.fire(lastNameFirstName, " guardado", "success");
      } else if (result.isDenied) {
        handlePostStudent();
      }
    });
  };

  const RedirectToHome = () => {
    navigate("/");
  }

  const handleDeleteCourse = async () => {
    Swal.fire({
      title: "Seguro quiere borrar el curso",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Borrar",
      denyButtonText: `No borrar`
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await ServiceCourse.delete(Number(id));
          navigate("/");
        } catch (error) {
          console.error("Error al eliminar el curso:", error);
        }
        Swal.fire("Curso borrado");
      } else if (result.isDenied) {
        Swal.fire("El curso no fue borrado");
      }
    });
  };

  return (
    <div style={styles.containerStudent}>

      <div style={{ justifyContent: 'center' }}>
        <Button variant="light" style={getButtonStyles()} onClick={handlePostStudent}>Agregar alumno</Button>
        <Button variant="light" style={getButtonStyles()} onClick={RedirectToHome}>Volver a cursos</Button>
        <Button variant="light" style={getButtonStyles()} onClick={handleDeleteCourse}>Eliminar curso</Button>
        <ListStudent students={students}></ListStudent>
      </div>
    </div>
  )
}

export default Courses;