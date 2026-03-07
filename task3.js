function checkDiscount(Member, Amount) {
    let discount = 0;

    if (Member) {
        discount = Amount * 0.30; 
        let finalAmount = Amount - discount;
        console.log("Customer is a member.");
        console.log("Discount: " + discount);
        console.log("Final Amount: " + finalAmount);
    } else {
        console.log("Customer is not a member.");
        console.log("No discount.");
        console.log("Amount to pay: " + Amount);
    }
}
checkDiscount(true, 1000);