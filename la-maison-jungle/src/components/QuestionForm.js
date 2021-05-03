
function HandleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}

export default HandleSubmit