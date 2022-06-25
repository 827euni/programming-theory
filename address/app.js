let contactList = RANDOM_USERS.results.map((user) => {
  const name = `${user.name.first} ${user.name.last}`
  const email = user.email
  const phone = user.phone
  return { name, email, phone }
})

console.log(JSON.stringify(contactList))

let CONTACT_DB = []

function create(row) {
  CONTACT_DB.push(row)
}

function read(keyObj) {
  const founds = CONTACT_DB.filter((row) => row.name === keyObj.name)
  const searchDiv = document.querySelector('#search')
  searchDiv.innerHTML = `<h5>name: ${keyObj.name} </h5>`
  const foundDiv = document.querySelector('#found')
  founds.forEach((user) => {
    console.log(user.name)
    foundDiv.innerHTML += `<h5>${user.name} ${user.email} ${user.phone} </h5>`
  })
  return founds
}

function update(keyObj, valueObj) {
  const founds = CONTACT_DB.filter((row) => row === keyObj)
  let updMember = founds && founds.length > 0 ? founds[0] : null
  if (!updMember) return
  const newDB = CONTACT_DB.filter((row) => row !== keyObj)
  updMember = { ...updMember, ...valueObj }
  console.log(updMember)
  CONTACT_DB = [...newDB, updMember]
}

function remove(keyObj) {
  const newDB = CONTACT_DB.filter((row) => row !== keyObj)
  CONTACT_DB = [...newDB]
}

function list() {
  const tbody = document.querySelector('#contact-table-body')
  const tbodyText = CONTACT_DB.map((tr) => {
    return `<tr><td>${tr.name}</td><td>${tr.email}</td><td>${tr.phone}</td></tr>`
  }).join('\n')
  console.log(tbodyText)
  tbody.innerHTML = tbodyText
}
function listConsole() {
  CONTACT_DB.forEach((row) => {
    console.log(JSON.stringify(row))
  })
}
// Main Routine

// build CONTACT_DB
contactList.forEach((row) => {
  create(row)
})
console.log('After Initial Create')
listConsole()
create({ name: 'cskim', email: 'cskim@hufs.ac.kr', phone: '031-330-4365' })
create({ name: 'cskim', email: 'cskim@hufs-gsuite.kr', phone: '010-111-1234' })
create({ name: 'Lim YoonA', email: 'limyoona@sment.com', phone: '010-0530-1990' })
create({ name: 'Jin HongYeon', email: 'yhonghong@naver.com', phone: '010-0503-0505' })
create({ name: 'Back Yeon', email: 'yeonyeonback@naver.com', phone: '010-7247-8873' })
create({ name: 'Kwon EunA', email: 'akea7@hufs.ac.kr', phone: '010-0827-6574' })
console.log('After add 2 cskim ')
listConsole()

read({ name: 'cskim' })

update({ name: 'cskim' }, { phone: '010-555-5555' })
console.log('After Update cskim')
listConsole()

remove({ name: 'cskim' })
console.log('After Remove cskim')
listConsole()

list()
