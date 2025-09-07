// app/roles/actions.ts
"use server";

import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4010/api";

export async function obtenerRoles() {
  try {
    const res = await axios.get(`${API_URL}/roles`);
    return res.data; // axios ya trae el .json()
  } catch (error) {
    console.error("Error al obtener roles:", error);
    throw new Error("No se pudieron cargar los roles");
  }
}

// Acción para crear un nuevo rol
export async function nuevoRol(data: { nombreRol: string; estado: number }) {
  try {
    const res = await axios.post(`${API_URL}/roles/nuevo`, data, {
      headers: { "Content-Type": "application/json" }
    });
    //console.log(res);
    return res.data;
  } catch (error: any) {
    console.error("Error al crear rol:", error.response?.data);
    const mensaje = error.response?.data?.mensaje || "No se pudo crear el rol";

    throw new Error(mensaje);
  }
}

// Acción para actualizar un rol existente
export async function actualizarRol(
  id: string,
  data: { nombreRol: string; estado: number }
) {
  try {
    const res = await axios.put(`${API_URL}/roles/${id}`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: any) {
    console.error("Error al actualizar rol:", error.response?.data);
    const mensaje = error.response?.data?.mensaje || "No se pudo actualizar el rol";
    throw new Error(mensaje);
  }
}