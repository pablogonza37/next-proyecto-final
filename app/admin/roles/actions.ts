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