// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Azione fallita',
  success: 'Azione eseguita con successo',
  index: {
    label: 'Applicazione To Do'
  },
  settings:{
    languages: {
      select: {
        label: 'Lingua',
        options: {
          italian: 'Italiano',
          english: 'Inglese'
        }
      }
    }
  },
  toolbar: {
    label: 'Applicazione To Do'
  },
  menu: {
    label: 'Menù'
  },
  layout: {
    links: {
      home: {
        title: 'Home',
        caption: 'Pagina Home'
      },
      settings: {
        title: 'Configurazione',
        caption: 'Pagina di configurazione'
      }
    }
  },
  date: JSON.stringify({
    days: ['Domenica', 'Lunedì','Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    daysShort: ['Dom', 'Lun','Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
    months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    monthsShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
  })
}
