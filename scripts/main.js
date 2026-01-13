let leads = []


const leadName = document.getElementById("name")
const leadEmail = document.getElementById("email")
const saveLead = document.getElementById("save-lead")
const exportExcel = document.getElementById("export")
const clearLeads = document.getElementById("clear")
const leadList = document.getElementById("lead-list")

const storedLeads = JSON.parse( localStorage.getItem("Leads") )

if (storedLeads) {
  leads = storedLeads
  render(leads)
}

function render(leads) {
  let items = ""

  for (let i = 0; i < leads.length; i++) {
    items += `
      <p> ${leads[i][0]} (<span> ${leads[i][1]} </span>) </p>
    `
    
  }
  leadList.innerHTML = items
}


saveLead.addEventListener("click", function(){
  leads.push([leadName.value, leadEmail.value])
  leadName.value = ''
  leadEmail.value = ''
  localStorage.setItem("leads", JSON.stringify(leads))
  render(leads)

})
