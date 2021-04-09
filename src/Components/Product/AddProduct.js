import React, {useState} from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Sidebar from '../Sidebar/Sidebar'; 

const AddProduct = (props) => { 
	const history = useHistory()
    const [form, setForm] = useState({
        productName: "",
        nationalDrugCode: "",
        drugStrength: "",
        genericCodeNum: "",
        unitOfMeasurement: "",
        dosage: "",
    })

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const routeChange = () => {
    }

    const handleSubmit =(e) => {
    }

    return (
        <div className="register-countainter add-product">
            <Sidebar />
            <Form onSubmit={handleSubmit} className="p-5">
                <Form.Group controlId="productName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="productName"
                        placeholder="Enter Product Name"
                        value={form.productName}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        placeholder="Enter Product Description"
                        value={form.description}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="material">
                    <Form.Label>Product Material</Form.Label>
                    <Form.Control
                        type="text"
                        name="material"
                        placeholder="Enter Product Material"
                        value={form.material}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="originalPrice">
                    <Form.Label>Product Original Price</Form.Label>
                    <Form.Control
                        type="text"
                        name="originalPrice"
                        placeholder="Enter Product Original Price"
                        value={form.originalPrice}
                        onChange={handleChange}
                    />
                </Form.Group><Form.Group controlId="discountPrice">
                    <Form.Label>Product Discount Price</Form.Label>
                    <Form.Control
                        type="text"
                        name="discountPrice"
                        placeholder="Enter Discounted Price"
                        value={form.discountPrice}
                        onChange={handleChange}
                    />
                </Form.Group><Form.Group controlId="quantity">
                    <Form.Label>Product Quantity</Form.Label>
                    <Form.Control
                        type="text"
                        name="quantity"
                        placeholder="Enter Product Quantity"
                        value={form.quantity}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default AddProduct;