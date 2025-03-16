document.addEventListener('DOMContentLoaded',()=>{
    // const amount = document.getElementById('amount').value
    // const discription = document.getElementById('discription').value
    // const category = document.getElementById('category').value

    const form_btn = document.getElementById('Expence_form')
    const table_body = document.getElementById('expense-list')
    const token = localStorage.getItem('token')
    if(!token){
        window.location.href = 'index.html'
        return
    }


    form_btn.addEventListener('submit',(event)=>{
        event.preventDefault()
        const amount = document.getElementById('amount').value.trim()
        const discription = document.getElementById('discription').value.trim()
        const category = document.getElementById('category').value
        if(!amount || !discription || !category ){
            alert('Please fill all fields.')
            return
        }
        const newRow = document.createElement('tr')
        console.log(amount,discription,category)
        newRow.innerHTML = `
        <td>${amount}</td>
        <td>${discription}</td>
        <td>${category}</td>
        <td><button class="delete-btn">Delete</button></td>`

        table_body.appendChild(newRow)

        amount.value = '';
        discription.value = '';
        category.value = '';
    })
 
})