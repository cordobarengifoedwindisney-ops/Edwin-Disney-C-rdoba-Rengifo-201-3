const personas = require('../models/personas');

const getPersonas = (req, res) => {
  const lista = personas.map(p => ({
    ...p,
    numDoc: '****' + p.numDoc.slice(-4)
  }));
  res.json(lista);
};

const getPersonaById = (req, res) => {
  const persona = personas.find(p => p.id === req.params.id);
  if (!persona) return res.status(404).json({ mensaje: "Persona no encontrada" });
  res.json(persona);
};

const createPersona = (req, res) => {
  const { tipoDoc, numDoc, nombres, apellidos, email, telefono, ciudad } = req.body;
  if (!tipoDoc || !numDoc || !nombres || !apellidos || !email) {
    return res.status(400).json({ mensaje: "Faltan campos requeridos: tipoDoc, numDoc, nombres, apellidos, email" });
  }
  const existe = personas.find(p => p.numDoc === numDoc || p.email === email);
  if (existe) return res.status(409).json({ mensaje: "Ya existe una persona con ese documento o email" });
  const nueva = {
    id: "per-" + String(personas.length + 1).padStart(3, '0'),
    tipoDoc, numDoc, nombres, apellidos, email,
    telefono: telefono || "",
    ciudad: ciudad || "",
    activo: true,
    creadoEn: new Date().toISOString()
  };
  personas.push(nueva);
  res.status(201).json(nueva);
};

const updatePersona = (req, res) => {
  const persona = personas.find(p => p.id === req.params.id);
  if (!persona) return res.status(404).json({ mensaje: "Persona no encontrada" });
  const { nombres, apellidos, email, telefono, ciudad } = req.body;
  if (nombres) persona.nombres = nombres;
  if (apellidos) persona.apellidos = apellidos;
  if (email) persona.email = email;
  if (telefono) persona.telefono = telefono;
  if (ciudad) persona.ciudad = ciudad;
  res.json(persona);
};

const deletePersona = (req, res) => {
  const persona = personas.find(p => p.id === req.params.id);
  if (!persona) return res.status(404).json({ mensaje: "Persona no encontrada" });
  persona.activo = false;
  res.status(204).send();
};

module.exports = { getPersonas, getPersonaById, createPersona, updatePersona, deletePersona };