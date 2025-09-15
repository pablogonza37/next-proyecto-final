"use server";

import axios, { AxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4010/api";

export async function obtenerMaterias() {
  try {
    const res = await axios.get(`${API_URL}/materias`);
    return res.data; 
  } catch (error: unknown) {
    throw new Error(error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudieron cargar las materias" : "No se pudieron cargar las materias");
  }
}

export async function obtenerMateria(id: string) {
  const res = await axios.get(`${API_URL}/materias/${id}`);
  return res.data;
}


export async function nuevaMateria(data: { nombreMateria: string; descripcion: string; nivel: string, estado: number }) {
  try {
    const res = await axios.post(`${API_URL}/materias/nuevo`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
    } catch (error: unknown) {
    const mensaje = error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudo crear la materia" : "No se pudo crear la materia";

    throw new Error(mensaje);
  }
}

export async function actualizarMateria(
  id: string,
  data: { nombreMateria: string; nivel: string, estado: number }
) {
  try {
    const res = await axios.put(`${API_URL}/materias/${id}`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: unknown) {
    const mensaje = error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudo actualizar la materia" : "No se pudo actualizar la materia";
    throw new Error(mensaje);
  }
}

export async function borrarMateria(id: string) {
  try {
    const res = await axios.delete(`${API_URL}/materias/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data; 
  } catch (error: unknown) {
    const mensaje = error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudo borrar la materia" :  "No se pudo borrar la materia";
    throw new Error(mensaje);
  }
}