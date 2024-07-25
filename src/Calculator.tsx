import React, { useState } from "react";
import "./Calculator.css";

/** 
 * Calculator component for calculating the tip.
 */

const Calculator: React.FC = () => {
    /**
     * useState statements to set the const to a specific thing later.
     */
    const [price, setPrice] = useState<number | string>("");
    const [tipPercent, setTipPercent] = useState<number | string>("");
    const [total, setTotal] = useState<number | string>("");

    function handlePriceChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const value = event.target.valueAsNumber;
        setPrice(isNaN(value) ? "" : value);
    }

    function handleTipPercentChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const value = event.target.valueAsNumber;
        setTipPercent(isNaN(value) ? "" : value);
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log("Total is:", total);

        if (typeof price === "number" && price > 0 && typeof tipPercent === "number" && tipPercent >= 0) {
            const tip = price * (tipPercent / 100);
            const totalAmount = price + tip;
            setTotal(totalAmount.toFixed(2));
        } else {
            setTotal("Incorrect input!")
        }
    }

    return (
        <div className="calculator-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={handlePriceChange}
                    />
                </div>
                <div>
                    <label htmlFor="tipPercent">Tip (%):</label>
                    <input 
                    type="number"
                    id="tipPercent"
                    value={tipPercent}
                    onChange={handleTipPercentChange}
                    />
                </div>
                <button type="submit">Calculate</button>
            </form>
            {total && <div>Total: ${total}</div>}
        </div>
    )
    
}

export default Calculator;