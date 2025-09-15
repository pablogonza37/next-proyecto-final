"use server";

import { dataInscripcionInterface, dataMateriaInterface } from "@/components/types/actions";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4010/api";

export async function obtenerInscripciones() {
  try {
    const res = await axios.get(`${API_URL}/inscripciones`);
    return res.data;
  } catch (error) {
    console.error("Error al obtener las inscripciones:", error);
    throw new Error("No se pudieron cargar las inscripciones");
  }
}

export async function obtenerInscripcion(id: string) {
  const res = await axios.get(`${API_URL}/inscripciones/${id}`);
  return res.data;
}

export async function actualizarInscripcion(
  id: string,
  data: dataInscripcionInterface
) {
  try {
    const res = await axios.put(`${API_URL}/inscripciones/${id}`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: any) {
    console.error("Error al actualizar inscripción:", error.response?.data);
    const mensaje = error.response?.data?.mensaje || "No se pudo actualizar la inscripción";
    throw new Error(mensaje);
  }
}

export async function borrarInscripcion(id: string) {
  try {
    const res = await axios.delete(`${API_URL}/inscripciones/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error: any) {
    console.error("Error al borrar la inscripción:", error.response?.data);
    const mensaje = error.response?.data?.mensaje || "No se pudo borrar la inscripción";
    throw new Error(mensaje);
  }
}

export async function obtenerMaterias(): Promise<dataMateriaInterface[]> {
  try {
    const res = await axios.get(`${API_URL}/materias`);
    return res.data;
  } catch (error) {
    console.error("Error al obtener las materias:", error);
    throw new Error("No se pudieron cargar las materias");
  }
}