const contacts = [
  {
    id: 1,
    name: "María González",
    avatar: "https://i.pravatar.cc/150?img=31",
    lastMessage: "¿Vamos al cine mañana?",
    time: "10:30 AM",
    unread: 3,
    isOnline: true,
    isFavorite: true,
    isGroup: false,
    lastSeen: "Hoy a las 09:45",
    status: "¡Nos vemos pronto!",
    messages: [
      { id: 1, from: 'them', text: 'Hola Sofi!', time: '17:00', read: true },
      { id: 2, from: 'me', text: 'Holaaa!', time: '17:01', read: true },
      { id: 3, from: 'them', text: '¿Vamos al cine mañana?', time: '10:30 AM', read: false },
      { id: 4, from: 'them', text: 'Hay una nueva película de Marvel', time: '10:31 AM', read: false },
      { id: 5, from: 'them', text: 'Te mando los horarios', time: '10:32 AM', read: false }
    ]
  },
  {
    id: 2,
    name: "Grupo de Trabajo",
    avatar: "https://i.pravatar.cc/150?img=60",
    lastMessage: "Carlos: Envié el informe final",
    time: "Ayer",
    unread: 0,
    isOnline: false,
    isFavorite: false,
    isGroup: true,
    members: ["Carlos", "Ana", "Luis", "Tú"],
    groupAdmin: "Ana",
    messages: [
      { id: 1, from: 'Ana', text: 'Buenos días equipo!', time: '09:00', read: true },
      { id: 2, from: 'me', text: 'Listo para la reunión', time: '09:15', read: true },
      { id: 3, from: 'Luis', text: 'Terminé el análisis', time: '14:30', read: true },
      { id: 4, from: 'Carlos', text: 'Envié el informe final', time: '16:45', read: true },
      { id: 5, from: 'me', text: 'Gracias a todos!', time: '17:00', read: true }
    ]
  },
  {
    id: 3,
    name: "Pedro Martínez",
    avatar: "https://i.pravatar.cc/150?img=15",
    lastMessage: "El paquete llegó sin problemas",
    time: "Ayer",
    unread: 1,
    isOnline: false,
    isFavorite: false,
    isGroup: false,
    lastSeen: "Ayer a las 22:15",
    status: "Disponible",
    messages: [
      { id: 1, from: 'them', text: 'Hola, soy el repartidor', time: '15:00', read: true },
      { id: 2, from: 'me', text: 'Hola Pedro!', time: '15:05', read: true },
      { id: 3, from: 'them', text: 'Tengo tu paquete', time: '15:06', read: true },
      { id: 4, from: 'them', text: 'El paquete llegó sin problemas', time: '18:30', read: false },
      { id: 5, from: 'me', text: 'Perfecto, gracias!', time: '18:35', read: true }
    ]
  },
  {
    id: 4,
    name: "Familia",
    avatar: "https://i.pravatar.cc/150?img=45",
    lastMessage: "Mamá: No olvides la reunión",
    time: "05/06/23",
    unread: 5,
    isOnline: true,
    isFavorite: true,
    isGroup: true,
    members: ["Mamá", "Papá", "Hermana", "Tú"],
    groupAdmin: "Mamá",
    messages: [
      { id: 1, from: 'Papá', text: '¿Cómo están todos?', time: '10:00', read: true },
      { id: 2, from: 'Hermana', text: 'Bien!', time: '10:05', read: true },
      { id: 3, from: 'me', text: 'Todo bien por acá', time: '10:10', read: true },
      { id: 4, from: 'Mamá', text: 'No olvides la reunión', time: '12:00', read: false },
      { id: 5, from: 'Mamá', text: 'Es importante', time: '12:01', read: false },
      { id: 6, from: 'Mamá', text: 'A las 8pm', time: '12:02', read: false }
    ]
  },
  {
    id: 5,
    name: "Laura Fernández",
    avatar: "https://i.pravatar.cc/150?img=8",
    lastMessage: "El diseño está terminado",
    time: "04/06/23",
    unread: 0,
    isOnline: false,
    isFavorite: true,
    isGroup: false,
    lastSeen: "04/06/23 a las 18:30",
    status: "En vacaciones 🏖️",
    messages: [
      { id: 1, from: 'them', text: 'Hola, cómo va el proyecto?', time: '16:00', read: true },
      { id: 2, from: 'me', text: 'Bien, avanzando!', time: '16:05', read: true },
      { id: 3, from: 'them', text: 'El diseño está terminado', time: '17:30', read: true },
      { id: 4, from: 'me', text: 'Gracias!', time: '17:35', read: true },
      { id: 5, from: 'them', text: 'Me voy de vacaciones 🏖️', time: '17:36', read: true }
    ]
  },
  {
    id: 6,
    name: "Juan Pérez",
    avatar: "https://i.pravatar.cc/150?img=12",
    lastMessage: "Confirmado para el sábado",
    time: "03/06/23",
    unread: 0,
    isOnline: true,
    isFavorite: false,
    isGroup: false,
    lastSeen: "En línea",
    status: "Disponible para trabajar",
    messages: [
      { id: 1, from: 'them', text: 'Hola, tenemos reunión el sábado', time: '10:00', read: true },
      { id: 2, from: 'me', text: 'Perfecto, a qué hora?', time: '10:05', read: true },
      { id: 3, from: 'them', text: 'A las 11am', time: '10:06', read: true },
      { id: 4, from: 'me', text: 'De acuerdo', time: '10:07', read: true },
      { id: 5, from: 'them', text: 'Confirmado para el sábado', time: '10:08', read: true }
    ]
  }
];

export default contacts



