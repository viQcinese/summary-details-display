import data from './data.js'

function buildSummaryList() {
  // Put names on summary list
  const summaryList = document.querySelector("#summary-list")

  data.forEach(person => {
    summaryList.innerHTML += `<li id="person-${person.id}">${person.name}</li>`
  })

  // When name is clicked...
  document.querySelector('#summary-list').addEventListener('click', e => {
    if (e.target.id.includes('person-')) {
      // Highlight Selected Element
      document.querySelectorAll('#summary-list li').forEach(element => {
        element.className = ""
        element.classList.remove('selected')
      })
      e.target.classList.add('selected')


      // Get Data
      const id = e.target.id;
      const { name, birthday, telephone, state, street, city, country} = data.find(e => {
        return e.id === id.split('-')[1]
      })

      // Put data on Details 
      document.querySelector('#details-display').innerHTML = `
        <p><b>Name: </b>${name}</p>
        <p><b>Birthday: </b>${birthday}</p>
        <p><b>Telephone: </b>${telephone}</p>
        <p><b>Country: </b>${country}</p>
        <p><b>State: </b>${state}</p>
        <p><b>City: </b>${city}</p>
        <p><b>Street: </b>${street}</p>
      `
    }
  })
}

buildSummaryList()