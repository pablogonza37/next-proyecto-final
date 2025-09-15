"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { registerUser } from "../services/registerService";
import { showSuccess, showError } from "@/lib/sweetalert";

type RegisterFormInputs = {
  nombreUsuario: string;
  apellidoUsuario: string;
  dni: string;
  birthDate: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
};

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInputs>();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      const result = await registerUser({
        nombreUsuario: data.nombreUsuario,
        apellidoUsuario: data.apellidoUsuario,
        dni: data.dni,
        email: data.email,
        password: data.password,
        role: data.role || "alumno",
      });
      await showSuccess(
        "¡Registro exitoso!",
        `✅ ${result.nombre} se registró correctamente`
      );

      reset(); 
    } catch (error: unknown) {
      await showError(
        "Error en el registro", 
        `❌ ${error instanceof Error ? error.message : "Error al registrar usuario"}`
      );
    }
  };

  const password = watch("password");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-700"
      >
       <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Crear Cuenta</h1>
          <p className="text-gray-400 text-sm mt-2">
            Regístrate para acceder al portal de inscripción
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input
            type="text"
            placeholder="Nombre"
            {...register("nombreUsuario", {
              required: "El nombre del usuario es obligatorio",
              minLength: {
                value: 3,
                message: "El nombre del usuario debe contener al menos 3 caracteres",
              },
              maxLength: {
                value: 30,
                message: "El nombre del usuario no puede superar 30 caracteres",
              },
              pattern: {
                value: /^[A-Za-zÀ-ÿ\s]+$/,
                message: "El nombre solo puede contener letras",
              },
            })}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700"
          />
          {errors.nombreUsuario && <p className="text-red-400">{errors.nombreUsuario.message}</p>}

          <input
            type="text"
            placeholder="Apellido"
            {...register("apellidoUsuario", {
              required: "El apellido del usuario es obligatorio",
              minLength: { value: 3, message: "El apellido debe contener al menos 3 caracteres" },
              maxLength: { value: 40, message: "El apellido no puede superar 40 caracteres" },
              pattern: { value: /^[A-Za-zÀ-ÿ\s]+$/, message: "El apellido solo puede contener letras" },
            })}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700"
          />
          {errors.apellidoUsuario && <p className="text-red-400">{errors.apellidoUsuario.message}</p>}

          <input
            type="text"
            placeholder="DNI"
            {...register("dni", {
              required: "El DNI es obligatorio",
              pattern: { value: /^[0-9]{1,8}$/, message: "El DNI debe ser un número válido" },
            })}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700"
          />
          {errors.dni && <p className="text-red-400">{errors.dni.message}</p>}

          <input
            type="email"
            placeholder="Correo electrónico"
            {...register("email", {
              required: "El e-mail es obligatorio",
              minLength: { value: 5, message: "El e-mail debe tener al menos 5 caracteres" },
              maxLength: { value: 60, message: "El e-mail no puede superar 60 caracteres" },
              pattern: { value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, message: "El e-mail debe cumplir con el formato juan@correo.com" },
            })}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700"
          />
          {errors.email && <p className="text-red-400">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: "La contraseña es obligatoria",
              pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message:
                  "Debe tener 8-16 caracteres, al menos un número, una minúscula, una mayúscula y sin caracteres especiales",
              },
            })}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700"
          />
          {errors.password && <p className="text-red-400">{errors.password.message}</p>}

          <input
            type="password"
            placeholder="Confirmar contraseña"
            {...register("confirmPassword", {
              required: "Repite la contraseña",
              validate: (val) => val === password || "No coinciden",
            })}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700"
          />
          {errors.confirmPassword && <p className="text-red-400">{errors.confirmPassword.message}</p>}

          <select
            {...register("role")}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700"
          >
            <option value="alumno">Alumno</option>
            <option value="profesor">Profesor</option>
          </select>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg"
          >
            Registrarse
          </motion.button>
        </form>


         <p className="text-gray-400 text-xs text-center mt-6">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Inicia sesión aquí
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
