export interface dataRolInterface{ 
    nombreRol: string; 
    estado: number 
}

export interface dataUsuarioInterface{ 
    nombreUsuario: string; 
    apellidoUsuario: string, 
    dni: number, 
    email: string, 
    password: string, 
    role: string 
}

export interface dataComisionInterface { 
    nombreComision: string; 
    fechaInicio: Date; 
    fechaFin: Date;  
    horaInicio: string; 
    horaFin: string; 
    diasDictado: string; 
    cupo: number; 
    estado: number; 
    materia: string; 
    usuario: string; 
}

export interface dataInscripcionInterface { 
    fechaInscripcion: Date; 
    estado: number; 
    comision: string;
    materia: string; 
    usuario: string; 
}