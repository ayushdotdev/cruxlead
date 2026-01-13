let leads = []


const leadName = document.getElementById("name")
const leadEmail = document.getElementById("email")
const saveLead = document.getElementById("save-lead")
const exportExcel = document.getElementById("export")
const clearLeads = document.getElementById("clear")

const storedLeads = JSON.parse( localstorage.getItem("Leads") )

if (storedLeads) {
  leads = storedLeads
}

funtion render(leads) {
  let items = ""

  for (let i = 0; i < leads.length; i++) {
    items += `
      div


    `

  }
}
