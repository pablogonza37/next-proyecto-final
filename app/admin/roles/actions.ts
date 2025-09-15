"use server";

import { dataRolInterface } from "@/components/types/actions";
import axios, { AxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4010/api";

export async function obtenerRoles() {
  try {
    const res = await axios.get(`${API_URL}/roles`);
    return res.data; 
  } catch (error: unknown) {
    throw new Error(error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudieron cargar los roles" : "No se pudieron cargar los roles");
  }
}

export async function nuevoRol(data: dataRolInterface) {
  try {
    const res = await axios.post(`${API_URL}/roles/nuevo`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: unknown) {
    const mensaje = error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudo crear el rol" : "No se pudo crear el rol";

    throw new Error(mensaje);
  }
}

export async function actualizarRol(
  id: string,
  data: dataRolInterface
) {
  try {
    const res = await axios.put(`${API_URL}/roles/${id}`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: unknown) {
    const mensaje = error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudo actualizar el rol" : "No se pudo actualizar el rol";
    throw new Error(mensaje);
  }
}

export async function obtenerRol(id: string) {
  const res = await axios.get(`${API_URL}/roles/${id}`);
  return res.data;
}

export async function borrarRol(id: string) {
  try {
    const res = await axios.delete(`${API_URL}/roles/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data; 
  } catch (error: unknown) {
    const mensaje = error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudo borrar el rol" : "No se pudo borrar el rol";
    throw new Error(mensaje);
  }
}