// app/usuarios/actions.ts
"use server";

import { dataUsuarioInterface } from "@/components/types/actions";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4010/api";

export async function obtenerUsuarios() {
  try {
    const res = await axios.get(`${API_URL}/auth`);
    return res.data; 
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw new Error("No se pudieron cargar los usuarios");
  }
}

// Acción para crear un nuevo usuario
export async function nuevoUsuario(data: dataUsuarioInterface) {
  try {
    const res = await axios.post(`${API_URL}/auth/nuevo`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: any) {
    console.error("Error al crear usuario:", error.response?.data);
    const mensaje = error.response?.data?.mensaje || "No se pudo crear el usuario";

    throw new Error(mensaje);
  }
}

// Acción para obtener un usuario existente
export async function obtenerUsuario(id: string) {
  const res = await axios.get(`${API_URL}/auth/${id}`);
  return res.data;
}

// Acción para actualizar un usuario existente
export async function actualizarUsuario(
  id: string,
  data: dataUsuarioInterface
) {
  try {
    const res = await axios.put(`${API_URL}/auth/${id}`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: any) {
    console.error("Error al actualizar el usuario:", error.response?.data);
    const mensaje = error.response?.data?.mensaje || "No se pudo actualizar el usuario";
    throw new Error(mensaje);
  }
}

//Acción para borrar un usuario existente
export async function borrarUsuario(id: string) {
  try {
    const res = await axios.delete(`${API_URL}/auth/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data; // devuelve lo que la API responda
  } catch (error: any) {
    console.error("Error al borrar el usuario:", error.response?.data);
    const mensaje = error.response?.data?.mensaje || "No se pudo borrar el usuario";
    throw new Error(mensaje);
  }
}