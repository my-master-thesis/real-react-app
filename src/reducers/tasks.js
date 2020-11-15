import {ADD_TASK, EDIT_TASK, EDIT_TASK_DURATION} from "../constants/ActionTypes";

let initialData = [
  {
    id: 12,
    title: 'Oddaj izdelek',
    description: 'Oddaj izdelek v ocenjevanje',
    contactId: 8,
  },
  {
    id: 11,
    title: 'Preveri pravilnost rešitev',
    description: '',
    contactId: 19
  },
  {
    id: 10,
    title: 'Udeleži se dogodka',
    description: 'V petek ob 18 uri',
    contactId: 26
  },
  {
    id: 9,
    title: 'Preglej razpored',
    description: '',
  },
  {
    id: 8,
    title: 'Dodeli nedeodeljene naloge',
    description: 'Vse nedodeljene naloge razdeli med kontakte',
    contactId: 7
  },
  {
    id: 7,
    title: 'Opolni šefa o sestanku',
    description: 'Sestanek s podjetjem',
    contactId: 4
  },
  {
    id: 6,
    title: 'Realiziraj končni produkt',
    description: '',
  },
  {
    id: 5,
    title: 'Testiraj produkt',
    description: '',
  },
  {
    id: 4,
    title: 'Odpravi javljeno napako',
    description: 'Stranka je po elektonski pošti javila napako',
  },
  {
    id: 3,
    title: 'Dostavi produkt',
    description: 'Na naslov Celovša 987',
  },
  {
    id: 2,
    title: 'Pripravi zagovor',
    description: 'Pripravi zagovor opravljenega dela',
    contactId: 33
  },
  {
    id: 1,
    title: 'Naredi nalogo za matematiko',
    description: 'Integralni izračun',
    contactId: 18,
  },
];

try {
  let storageData = localStorage.getItem('tasks-store');
  if (storageData) {
    storageData = JSON.parse(storageData);
    if (Array.isArray(storageData)) {
      initialData = storageData;
    }
  }
} catch (e) {
  console.error(e);
}

export default function contacts(state = initialData, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          contactId: action.defaultContactId,
          title: '',
          description: '',
        },
        ...state,
      ]

    case EDIT_TASK:
      return state.map(task =>
        task.id === action.id ?
          { ...task,
            title: action.title ,
            description: action.description ,
            contactId: action.contactId ,
          } :
          task
      )

    case EDIT_TASK_DURATION:
      return state.map(task =>
        task.id === action.id ?
          { ...task,
            startDate: action.startDate,
            duration: action.duration,
          } :
          task
      )

    default:
      return state
  }
}
