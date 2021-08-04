import './ExpenseItem.css'
function ExpenseItem() {
    return (
        <div className="expense-item">
            <div> August 4th 2021</div>
            <div className="expense-item__description">
                <h2>Coffee</h2>
                <div className="expense-item__price">Amount</div>
            </div>

        </div>
    )
}

export default ExpenseItem;