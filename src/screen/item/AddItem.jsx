import React, { memo } from "react"
import styles from './AddItem.module.css'
const AddItem = () => {

    const handleChange = () => { }
    return (
        <main>
            <section className={styles.main}>
                <h3 className={styles.itemHead}>Item Details</h3>
            </section>
            <section className={styles.itemInputMain}>
                <div>
                    <div>Item Name</div>
                    <input
                        type="text"
                        name="name"
                        value=""
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div>Quantity</div>
                    <input
                        type="text"
                        name="quantity"
                        value=""
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div>Unit Price</div>
                    <input
                        type="text"
                        name="unitPrice"
                        value=""
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div>Date of Submission</div>
                    <input
                        type="date"
                        name="date"
                        value=""
                        onChange={handleChange}
                    />
                </div>
            </section>
        </main>
    )
}
export default memo(AddItem)