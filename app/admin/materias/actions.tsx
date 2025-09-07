// app/materias/actions.ts
"use server";

import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4010/api";

export async function obtenerMaterias() {
  try {
    const res = await axios.get(`${API_URL}/materias`);
    return res.data; // axios ya trae el .json()
  } catch (error) {
    console.error("Error al obtener las materias:", error);
    throw new Error("No se pudieron cargar las materias");
  }
}

// Acción para obtener una materia existente
export async function obtenerMateria(id: string) {
  const res = await axios.get(`${API_URL}/materias/${id}`);
  return res.data;
}


// Acción para crear una nueva materia
export async function nuevaMateria(data: { nombreMateria: string; descripcion: string; nivel: string, estado: number }) {
  try {
    const res = await axios.post(`${API_URL}/materias/nuevo`, data, {
      headers: { "Content-Type": "application/json" }
    });
    console.log(res);
    return res.data;
  } catch (error: any) {
    console.error("Error al crear materia:", error.response?.data);
    const mensaje = error.response?.data?.mensaje || "No se pudo crear la materia";

    throw new Error(mensaje);
  }
}

// Acción para actualizar una materia existente
export async function actualizarMateria(
  id: string,
  data: { nombreMateria: string; nivel: string, estado: number }
) {
  try {
    const res = await axios.put(`${API_URL}/materias/${id}`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: any) {
    console.error("Error al actualizar materia:", error.response?.data);
    const mensaje = error.response?.data?.mensaje || "No se pudo actualizar la materia";
    throw new Error(mensaje);
  }
}

//Acción para borrar una materia existente
export async function borrarMateria(id: string) {
  try {
    const res = await axios.delete(`${API_URL}/materias/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data; // devuelve lo que la API responda
  } catch (error: any) {
    console.error("Error al borrar la materia:", error.response?.data);
    const mensaje = error.response?.data?.mensaje || "No se pudo borrar la materia";
    throw new Error(mensaje);
  }
}