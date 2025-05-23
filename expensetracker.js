
        let expenseform=document.getElementById("expenseform");
        let expenselist=document.getElementById("expenselist");

        expenseform.addEventListener("submit",function(event){
            event.preventDefault();
            let Description  = document.getElementById("Description").value;
            let dropdown=document.getElementById("dropdown").value;
            let Amount = document.getElementById("Amount").value;
            

            if(Description && dropdown && !isNaN (Amount)){
                const newRow=document.createElement("tr")
                newRow.innerHTML= `<td>${Description}</td> <td>${dropdown}</td> <td>${Amount}</td>`;
                expenselist.appendChild(newRow);

                document.getElementById("Description").value="";
                document.getElementById("dropdown").value="";
                document.getElementById("Amount").value="";
            }
            else{
                alert("please fill out all the requirements")
            }
        })
        function calculateTotalAmount() {
            const rows = expenselist.getElementsByTagName('tr');
            let total = 0;

            for (let i = 0; i < rows.length; i++) {
                const cells = rows[i].getElementsByTagName('td');
                const amount = parseFloat(cells[2].textContent);
                if (!isNaN(amount)) {
                    total += amount;
                }
            }

            return total;
        }
        let calculateTotal = document.getElementById("calculateTotal");
        let totalAmountDiv = document.getElementById("totalAmount");
        calculateTotal.addEventListener("click", function() {
        const totalAmount = calculateTotalAmount();
        totalAmountDiv.textContent = `Total Amount: ₹${totalAmount.toFixed(2)}`;
});
