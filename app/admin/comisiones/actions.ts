
"use server";

import { dataComisionInterface } from "@/components/types/actions";
import axios, { AxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4010/api";

export async function obtenerComisiones() {
  try {
    const res = await axios.get(`${API_URL}/comisiones`);
    return res.data; 
  } catch (error: unknown) {
    const mensaje = error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudieron cargar las comisiones" : "No se pudieron cargar las comisiones";
    throw new Error(mensaje);
  }
}

export async function obtenerComision(id: string) {
  const res = await axios.get(`${API_URL}/comisiones/${id}`);
  return res.data;
}


export async function nuevaComision(data: dataComisionInterface) {
  try {
    const res = await axios.post(`${API_URL}/comisiones/nuevo`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: unknown) {
    const mensaje = error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudo crear la comisión" : "No se pudo crear la comisión";

    throw new Error(mensaje);
  }
}

export async function actualizarComision(
  id: string,
  data: dataComisionInterface
) {
  try {
    const res = await axios.put(`${API_URL}/comisiones/${id}`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: unknown) {
    const mensaje = error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudo actualizar la comisión" : "No se pudo actualizar la comisión";
    throw new Error(mensaje);
  }
}

export async function borrarComision(id: string) {
  try {
    const res = await axios.delete(`${API_URL}/comisiones/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data; 
  } catch (error: unknown) {
    const mensaje = error instanceof AxiosError ? error.response?.data?.mensaje || "No se pudo borrar la comisión" : "No se pudo borrar la comisión";
    throw new Error(mensaje);
  }
}