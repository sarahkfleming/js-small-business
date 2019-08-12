const assignmentsContainer = document.querySelector("#assignments-container")

const renderToDom = (HTMLString) => {
    assignmentsContainer.innerHTML += HTMLString
}

export default renderToDom