const assignmentHTML = (employee, department, computer) => {
    return `
    <article class="employee">
        <header class="employee__name">
        <h1>${employee}</h1>
        </header>
        <section class="employee__department">
        Works in the ${department} department
        </section>
        <section class="employee__computer">
        Currently using a laptop with serial number ${computer}
        </section>
    </article>
  `
}

export default assignmentHTML