"use server";

import { dataInscripcionInterface, dataMateriaInterface } from "@/components/types/actions";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4010/api";

export async function obtenerInscripciones() {
  try {
    const res = await axios.get(`${API_URL}/inscripciones`);
    return res.data;
  } catch (error) {
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
    const mensaje = error.response?.data?.mensaje || "No se pudo borrar la inscripción";
    throw new Error(mensaje);
  }
}


export async function nuevaInscripcion(data: dataInscripcionInterface) {
  try {
    const res = await axios.post(`${API_URL}/inscripciones`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error: any) {
    const mensaje = error.response?.data?.mensaje || "No se pudo crear la inscripción";
    throw new Error(mensaje);
  }
}

export async function nuevaInscripcionCompleta(
  materiaId: string,
  email: string,
  fechaInscripcion: string,
  comisionId: string,
  token: string
) {
  try {
    const usuario = await obtenerUsuarioPorEmail(email, token);
    
    const materia = await obtenerMateriaPorId(materiaId);
    
    const inscripcionData = {
      comision: comisionId,
      materia: materiaId,
      usuario: usuario._id,
      fechaInscripcion: fechaInscripcion
    };

    const res = await axios.post(`${API_URL}/inscripciones/nuevo`, inscripcionData, {
      headers: { 
        "Content-Type": "application/json",
        "x-token": token
      }
    });
    return res.data;
  } catch (error: any) {
    const mensaje = error.response?.data?.mensaje || error.response?.data?.error || "No se pudo crear la inscripción";
    throw new Error(mensaje);
  }
}

export async function obtenerUsuarioPorEmail(email: string, token: string) {
  try {
    const res = await axios.get(`${API_URL}/auth`, {
      headers: { "x-token": token }
    });
    const usuarios = res.data;
    const usuario = usuarios.find((u: any) => u.email === email);
    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }
    return usuario;
  } catch (error) {
    throw new Error("No se pudo obtener el usuario");
  }
}

export async function crearComisionAutomatica(nombreMateria: string, token: string) {
  try {
    const fechaActual = new Date();
    const fechaInicio = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
    const fechaFin = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 6, 0);
    
    const comisionData = {
      nombreComision: `Comisión ${nombreMateria} - ${fechaActual.getFullYear()}`,
      fechaInicio: fechaInicio.toISOString().split('T')[0],
      fechaFin: fechaFin.toISOString().split('T')[0],
      horaInicio: "08:00",
      horaFin: "12:00",
      diasDictado: "Lunes a Viernes",
      cupo: 50,
      nombreMateria: nombreMateria,
      emailUsuario: "admin@admin.com"
    };

    const res = await axios.post(`${API_URL}/comisiones`, comisionData, {
      headers: { 
        "Content-Type": "application/json",
        "x-token": token
      }
    });
    return res.data;
  } catch (error: any) {
    const mensaje = error.response?.data?.mensaje || "No se pudo crear la comisión";
    throw new Error(mensaje);
  }
}

export async function obtenerMaterias(): Promise<dataMateriaInterface[]> {
  try {
    const res = await axios.get(`${API_URL}/materias`);
    return res.data;
  } catch (error) {
    throw new Error("No se pudieron cargar las materias");
  }
}

export async function obtenerMateriaPorId(id: string): Promise<dataMateriaInterface> {
  try {
    const res = await axios.get(`${API_URL}/materias/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("No se pudo cargar la materia");
  }
}

export async function obtenerMateriasConComisiones(id: string) {
    const res = await axios.get(`${API_URL}/comisiones/materia/${id}`);
    return res.data;
}