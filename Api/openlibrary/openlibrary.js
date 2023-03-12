
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
result.innerHTML = "";
btn.addEventListener('click', function () {
    fetch("https://openlibrary.org/search.json?q=" + input.value)
        .then(a => a.json())
        .then(response => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '<table><thead><tr><td><div id="name"><h4>Name</h4></div></td><td><div id="Author"><h4>author</h4></div></td></tr></thead><tbody></tbody></table>';
            const tbody = resultDiv.querySelector('tbody');
            for (var i = 0; i < 10; i++) {
                const tr = document.createElement('tr');
                const titleTd = document.createElement('td');
                titleTd.innerText = response.docs[i].title;
                tr.appendChild(titleTd);
                const authorTd = document.createElement('td');
                authorTd.innerText = response.docs[i].author_name[0];
                tr.appendChild(authorTd);
                tbody.appendChild(tr);
            }
        });
});
 
