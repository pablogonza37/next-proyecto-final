// app/comisiones/actions.ts
"use server";

import { dataComisionInterface } from "@/components/types/actions";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4010/api";

export async function obtenerComisiones() {
  try {
    const res = await axios.get(`${API_URL}/comisiones`);
    return res.data; // axios ya trae el .json()
  } catch (error) {
    console.error("Error al obtener las comisiones:", error);
    throw new Error("No se pudieron cargar las comisiones");
  }
}

// Acción para obtener una comisión existente
export async function obtenerComision(id: string) {
  const res = await axios.get(`${API_URL}/comisiones/${id}`);
  return res.data;
}


// Acción para crear una nueva comisión
export async function nuevaComision(data: dataComisionInterface) {
  try {
    const res = await axios.post(`${API_URL}/comisiones/nuevo`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: any) {
    console.error("Error al crear una comisión:", error.response?.data);
    const mensaje = error.response?.data?.mensaje || "No se pudo crear la comisión";

    throw new Error(mensaje);
  }
}

// Acción para actualizar una comisión existente
export async function actualizarComision(
  id: string,
  data: dataComisionInterface
) {
  try {
    const res = await axios.put(`${API_URL}/comisiones/${id}`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: any) {
    console.error("Error al actualizar comisión:", error.response?.data);
    const mensaje = error.response?.data?.mensaje || "No se pudo actualizar la comisión";
    throw new Error(mensaje);
  }
}

//Acción para borrar una comisión existente
export async function borrarComision(id: string) {
  try {
    const res = await axios.delete(`${API_URL}/comisiones/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data; // devuelve lo que la API responda
  } catch (error: any) {
    console.error("Error al borrar la comisión:", error.response?.data);
    const mensaje = error.response?.data?.mensaje || "No se pudo borrar la comisión";
    throw new Error(mensaje);
  }
}