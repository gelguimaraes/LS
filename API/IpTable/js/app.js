class IpTables {

	constructor(addresses, ipTableContent) {
		this.addresses = addresses
		this.ipTableContent = ipTableContent
	}

	addAddress(address) {
		if (this.hasAddress(address)) {
			warningField.innerHTML = warningMessage
		} else {
			this.addresses.push(address)
			this.addRow(address)
		}
	}

	addRow(address) {
		const row = `<tr data-ip="${address.ip}">
		  <td>${address.ip}</td>
		  <td>${address.mask}</td>
		  <td>${address.version}</td>
		  <td>
			<i class="material-icons clear">clear</i>
			<i class="material-icons edit">mode_edit</i>
			<i class="material-icons update">check_circle</i>
		  </td>
		</tr>`

		const editRowIp = `<input type="text" name="ip" id="ip" class="form-control" value="${address.ip}">`
		const editRowMask = `<input type="text" name="mask" id="mask" class="form-control" value="${address.mask}">`
		const editRowVersion = `<input type="text" name="version" id="version" class="form-control" value="${address.version}">`
	


		this.ipTableContent.insertAdjacentHTML('beforeend', row)

		const clearButton = document.querySelector(`tr[data-ip='${address.ip}'] .clear`)
		const editButton = document.querySelector(`tr[data-ip='${address.ip}'] .edit`)
		const updateButton = document.querySelector(`tr[data-ip='${address.ip}'] .update`)



		clearButton.addEventListener('click', function (event) {
			let tr = clearButton.parentNode.parentNode
			this.removeAddress(tr, tr.dataset.ip)
			clearButton.blur()
		}.bind(this))

		editButton.addEventListener('click', function (event) {
			let tr = editButton.parentNode.parentNode;
			
			tr.childNodes[1].innerHTML = editRowIp;
			tr.childNodes[3].innerHTML = editRowMask;
			tr.childNodes[5].innerHTML = editRowVersion;
			
			clearButton.setAttribute("style","display: none")
			editButton.setAttribute("style","display: none") 
			updateButton.setAttribute("style","display: inline-block")
			
		})
		
		updateButton.addEventListener('click', function (event) {
				
			const ipInput = document.querySelector(`tr[data-ip='${address.ip}'] #ip`)
			const maskInput = document.querySelector(`tr[data-ip='${address.ip}'] #mask`)
			const versionInput = document.querySelector(`tr[data-ip='${address.ip}'] #version`)
			
			let tr = updateButton.parentNode.parentNode
				
			const newRowIp = `${ipInput.value}`
			const newRowMask = `${maskInput.value}`
			const newRowVersion = `${versionInput.value}`
		
			tr.childNodes[1].innerHTML = newRowIp;
			tr.childNodes[3].innerHTML = newRowMask;
			tr.childNodes[5].innerHTML = newRowVersion;
			
			clearButton.setAttribute("style","display: inline-block")
			editButton.setAttribute("style","display: inline-block") 
			updateButton.setAttribute("style","display: none")
			
			const newJson = {
					"ip": `${ipInput.value}`, 
					"mask": `${maskInput.value}`, 
					"version": `${versionInput.value}`
			}	
				
			this.editAddress(newJson, tr.dataset.ip)
			
		}.bind(this))

	}

	hasAddress(address) {
		return this.addresses.some(addressSelected => addressSelected.ip == address.ip)
	}

	removeAddress(tr, address) {
		tr.remove()
		this.addresses = this.addresses.filter(addressSelected => addressSelected.ip != address.ip)
	}

	editAddress(newjson, ip) {
		//console.log(address);
		//console.log(newjson);
		this.addresses = this.addresses.map(function(addressSelected){
			if(addressSelected.ip == ip){
				addressSelected.ip = newjson.ip;
				addressSelected.mask = newjson.mask;	
				addressSelected.version = newjson.version;		
				//console.log(addressSelected);
			}
			return addressSelected;
			
		}) 
		console.log(this.addresses);
	}


	render() {
		this.addresses.forEach(address => this.addRow(address))
	}

}

const button = document.querySelector('button')
const formAddIp = document.querySelector('form#add-ip')
const ipTableContent = document.querySelector('table#iptable tbody')
const warningField = document.querySelector('#warning')
const warningMessage =
	`<div class="alert alert-warning" role="alert">
      <strong>O endereço já foi adicionado.</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`
let iptables

fetch('https://ifpb.github.io/ls/codes/w3c/tasks/iptable/data/addresses.json')
	.then(res => res.json())
	.then(addresses => {
		iptables = new IpTables(addresses, ipTableContent)
		iptables.render()
		console.log(addresses);
	})

button.addEventListener('click', function (event) {
	const formData = new FormData(formAddIp)
	const address = {
		ip: formData.get('ip') || '-',
		mask: formData.get('mask') || '-',
		version: formData.get('version') || '-'
	}

	iptables.addAddress(address)

	event.preventDefault()
})