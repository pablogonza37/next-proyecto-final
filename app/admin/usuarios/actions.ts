"use server";

import { dataUsuarioInterface } from "@/components/types/actions";
import axios, { AxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4010/api";

export async function obtenerUsuarios() {
  try {
    const res = await axios.get(`${API_URL}/auth`);
    return res.data; 
  } catch (error: unknown) {
    throw new Error(error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudieron cargar los usuarios" : "No se pudieron cargar los usuarios");
  }
}

export async function nuevoUsuario(data: dataUsuarioInterface) {
  try {
    const res = await axios.post(`${API_URL}/auth/nuevo`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: unknown) {
    const mensaje = error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudo crear el usuario" : "No se pudo crear el usuario";

    throw new Error(mensaje);
  }
}

export async function obtenerUsuario(id: string) {
  const res = await axios.get(`${API_URL}/auth/${id}`);
  return res.data;
}

export async function actualizarUsuario(
  id: string,
  data: dataUsuarioInterface
) {
  try {
    const res = await axios.put(`${API_URL}/auth/${id}`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: unknown) {
    const mensaje = error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudo actualizar el usuario" : "No se pudo actualizar el usuario";
    throw new Error(mensaje);
  }
}

export async function borrarUsuario(id: string) {
  try {
    const res = await axios.delete(`${API_URL}/auth/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data; 
  } catch (error: unknown) {
    const mensaje = error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudo borrar el usuario" : "No se pudo borrar el usuario";
    throw new Error(mensaje);
  }
}