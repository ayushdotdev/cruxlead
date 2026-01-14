let leads = []


const leadName = document.getElementById("name")
const leadEmail = document.getElementById("email")
const saveLead = document.getElementById("save-lead")
const exportExcel = document.getElementById("export")
const clearLeads = document.getElementById("clear")
const leadList = document.getElementById("lead-list")
const totalLeads = document.getElementById("total-leads")


const storedLeads = JSON.parse( localStorage.getItem("leads") )

if (storedLeads) {
  leads = storedLeads
  render(leads)
  totalLeads.innerHTML = `${leads.length}`
}

function render(leads) {
  let items = ""

  for (let i = 0; i < leads.length; i++) {
    items += `
      <p> ${leads[i][0]} (<span> ${leads[i][1]} </span>) </p>
    `
    
  }
  leadList.innerHTML = items
  totalLeads.innerHTML = `${leads.length}`
}


saveLead.addEventListener("click", function(){
  leads.push([leadName.value, leadEmail.value])
  leadName.value = ''
  leadEmail.value = ''
  localStorage.setItem("leads", JSON.stringify(leads))
  render(leads)

})

clearLeads.addEventListener("click", function(){
  leads = []
  localStorage.setItem("leads", JSON.stringify(leads))
  render(leads)
})

function exportToExcel(leads){
  const data = [
    ["Name", "E-mail"],
    ...leads
  ]
  const worksheet = XLSX.utils.aoa_to_sheet(data)
  const workbook = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(workbook, worksheet, "Leads")

  XLSX.writeFile(workbook, "leads.xlsx")
}

exportExcel.addEventListener("click", function () {
  if (leads.length === 0) return
  exportToExcel(leads)
})
