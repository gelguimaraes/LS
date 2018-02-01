// JavaScript Document

const url1Input = document.querySelector('#url1')
const url2Input = document.querySelector('#url2')
const button = document.querySelector('button')

const boxInfoCompare = document.querySelector('#boxInfoCompare')

let address1 = url1Input.value.split("https://github.com/")[1]
let address2 = url2Input.value.split("https://github.com/")[1]
	//console.log(address1)
	//console.log(address2)

const headProject = `<div id="project"> <h2 class="title">Project</h2></div>`
const headCommunity = `<div id="community"> <h2 class="title">Community</h2></div>`
const headCode = `<div id="code"><h2 class="title">Code</h2</div>`


getCompare = (gitUser) => {

	const url = `https://api.github.com/repos/${gitUser}`

	fetch(url)
		.then(res => res.json())
		.then(json => {

			const htmlContentProject = `<div class="content">
        <a href="${json.html_url}" target="_blank" class="subTitle">${json.name}</a>
        <p class="textContnt">
			<i class="fa fa-user"></i>
			<a href="${json.owner.url}" target="_blank">${json.owner.login}</a>
		</p>
        <p class="text"><i class="fa fa-circle-o"></i>${dateFns.format(new Date(json.created_at), 'ddd Mo, YYYY')}</p>
        <p class="text"><i class="fa fa-refresh"></i>${dateFns.distanceInWords(json.created_at, json.updated_at)}</p>
      </div>`


			const htmlContentCommunity = `<div class="content">
        <p class="text">
			<i class="fa fa-star"></i>
			<a href="${json.stargazers_url}" target="_blank">${json.stargazers_count}</a> 
			<i class="fa fa-code-fork"></i>
			<a href="${json.forks_url}" target="_blank">${json.forks_count}</a>
		</p>
        <p class="text">
			<i class="fa fa-users"></i>
			<a href="${json.contributors_url}" target="_blank" id="contr${json.name}"></a>				
			<span> contributors</span>
		</p>
      </div>`

			const htmlContentCode = `<div class="content">
        <p class="text">
			<a href="${json.commits_url.split("{/sha}")[0]}" target="_blank" id="commit${json.name}"></a> 	
			<span>commits</span>
		</p>
        <p class="textPercent" id="lang${json.name}"><i class="fa fa-language"></i></p>
      </div>`


			const divProject = document.querySelector('#project')
			const divCommunit = document.querySelector('#community')
			const divCode = document.querySelector('#code')


			divProject.insertAdjacentHTML('beforeend', htmlContentProject)
			divCommunit.insertAdjacentHTML('beforeend', htmlContentCommunity)
			divCode.insertAdjacentHTML('beforeend', htmlContentCode)

			
			let textContributors = document.querySelector('#contr' + json.name)
			getContributors(json.contributors_url, textContributors)
			
			let textCommits = document.querySelector('#commit' + json.name)
			getCommits(json.commits_url.split("{/sha}")[0], textCommits)

			let textLanguages = document.querySelector('#lang' + json.name)
			getLanguages(json.languages_url, textLanguages)

		})
}


getLanguages = (url, seletor) => {
	fetch(url)
		.then(res => res.json())
		.then(json => {
			let array = Object.entries(json);
			let total = array.reduce((sum, item) => (sum + item[1]), 0);

			//console.log(total)
			let list = array.map((item) => "<p><span>" + item[0] + "</span>: " + ((item[1] / total) * 100).toFixed(2) + "%</p>").join(" ");

			seletor.insertAdjacentHTML('beforeend', list);
		})
}

getCommits = (url, seletor) => {
	fetch(url)
		.then(res => res.json())
		.then(json => {
			let commits = json.length
				//console.log(commits) 

			seletor.insertAdjacentHTML('beforeend', commits);
		})
}

getContributors = (url, seletor) => {
	fetch(url)
		.then(res => res.json())
		.then(json => {
			let contributors = json.length
				//console.log(commits) 

			seletor.insertAdjacentHTML('beforeend', contributors);
		})
}

button.addEventListener('click', function (event) {

	boxInfoCompare.innerHTML = headProject + headCommunity + headCode;

	getCompare(address1)
	getCompare(address2)

	event.preventDefault()
})