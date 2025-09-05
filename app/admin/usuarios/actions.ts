// app/usuarios/actions.ts
"use server";

import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4010/api";

export async function obtenerUsuarios() {
  try {
    const res = await axios.get(`${API_URL}/auth`);
    return res.data; // axios ya trae el .json()
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw new Error("No se pudieron cargar los usuarios");
  }
}

// Acción para crear un nuevo usuario
export async function nuevoUsuario(data: { nombreUsuario: string; apellidoUsuario: string, dni: number, email: string, password: string, role: string }) {
  console.log(data)
  try {
    const res = await axios.post(`${API_URL}/usuarios/nuevo`, data, {
      headers: { "Content-Type": "application/json" }
    });
    console.log(res);
    return res.data;
  } catch (error: any) {
    console.error("Error al crear usuario:", error.response?.data);
    const mensaje = error.response?.data?.mensaje || "No se pudo crear el usuario";

    throw new Error(mensaje);
  }
}

// Acción para actualizar un usuario existente
export async function actualizarUsuario(
  id: string,
  data: {nombreUsuario: string; apellidoUsuario: string, dni: number, email: string, password: string, role: string; estado: number }
) {
  try {
    const res = await axios.put(`${API_URL}/usuarios/${id}`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: any) {
    console.error("Error al actualizar el usuario:", error.response?.data);
    const mensaje = error.response?.data?.mensaje || "No se pudo actualizar el usuario";
    throw new Error(mensaje);
  }
}