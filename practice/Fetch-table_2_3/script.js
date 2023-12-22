async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    const tableBody = document.getElementById('tableBody')
    tableBody.innerHTML = ''

    data.forEach((post) => {
      const row = document.createElement('tr')
      row.innerHTML = `
          <td>${post.id}</td>
          <td>${post.userId}</td>
          <td>${post.title}</td>
          <td>${post.body}</td>
        `
      tableBody.appendChild(row)
    })
  } catch (error) {
    console.error('Ошибка при получении данных:', error)
  }
}

let ascending = true
function sortTable(columnIndex) {
  const table = document.getElementById('postTable')
  const rows = Array.from(table.getElementsByTagName('tr'))
  const header = rows.shift()

  rows.sort((a, b) => {
    const valueA = a.getElementsByTagName('td')[columnIndex].textContent
    const valueB = b.getElementsByTagName('td')[columnIndex].textContent

    return ascending
      ? valueA.localeCompare(valueB)
      : valueB.localeCompare(valueA)
  })

  ascending = !ascending
  table.appendChild(header)
  rows.forEach((row) => table.appendChild(row))
}

document.getElementById('searchInput').addEventListener('input', function () {
  const searchText = this.value.toLowerCase().trim()
  const rows = document.getElementById('tableBody').getElementsByTagName('tr')

  Array.from(rows).forEach((row) => {
    const columns = row.getElementsByTagName('td')
    let shouldHide = true

    Array.from(columns).forEach((column) => {
      if (column.textContent.toLowerCase().indexOf(searchText) > -1) {
        shouldHide = false
      }
    })

    shouldHide ? (row.style.display = 'none') : (row.style.display = '')
  })
})
document.getElementById('searchInput').addEventListener('input', function () {
  const searchText = this.value.toLowerCase().trim()
  const rows = document.getElementById('tableBody').getElementsByTagName('tr')

  if (searchText.length >= 3) {
    Array.from(rows).forEach((row) => {
      const columns = row.getElementsByTagName('td')
      let shouldHide = true

      Array.from(columns).forEach((column) => {
        if (column.textContent.toLowerCase().includes(searchText)) {
          shouldHide = false
        }
      })

      shouldHide ? (row.style.display = 'none') : (row.style.display = '')
    })
  } else {
    Array.from(rows).forEach((row) => {
      row.style.display = ''
    })
  }
})

fetchPosts()
