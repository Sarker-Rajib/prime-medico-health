import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import './MedicineShop.css';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from '../Login/Login';

const MedicineShop = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { currentUser } = useContext(AuthContext);
    const [medItems, setMedItems] = useState([]);

    const handleAddItem = (e) => {
        e.preventDefault();
        const form = e.target;
        const medicine = form.medicine.value;
        const medicineQuantity = form.medicineQuantity.value;
        const medItem = {
            medicine,
            medicineQuantity
        }

        setMedItems([...medItems, medItem]);
        form.reset();
    };

    console.log(medItems);

    return (
        <div className='container'>
            <div className="slider-medicine pt-3">
                <Swiper
                    navigation={true}
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={false}
                    spaceBetween={10}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    speed={700}
                    autoplay={{
                        delay: 4000,
                    }}
                    modules={[Navigation]}
                    className="mySwiper pb-3"
                >
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid w-100' src={image1} alt='ss' />
                            <div className="text">
                                <div className='text-center'>
                                    <h3>Get All items of medicine includes foreign items</h3>
                                    <p>We import foreign medicines.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid w-100' src={image2} alt='imageCarouseer' />
                            <div className="text">
                                <div className='text-center'>
                                    <h3>Get Sanitary Items with Medicines</h3>
                                    <p>Best items from top companies</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid w-100' src={image3} alt='imageCarouseer' />
                            <div className="text">
                                <div className='text-center'>
                                    <h3>Get Contraceptic Items</h3>
                                    <p>We are cared for you.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid w-100' src={image4} alt='imageCarouseer' />
                            <div className="text">
                                <div className='text-center'>
                                    <h3>Online Medicines from home</h3>
                                    <p>We provide home services also.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="about-medicine-shop">
                <h2 className='section-header'>A little about our shop</h2>
                <p>You will find our pharmacy well decorated, maintained and available for all your necessary medicine items. We provide medicines by our expert pharmacists.</p>
                <p className='m-0'>Some criteria for out pharmacy</p>
                <ul>
                    <li>Quality products at a reasonable price.</li>
                    <li>Fast and quality service.</li>
                    <li>Knowledgeable and experienced pharmacist.</li>
                    <li>Understand customers' needs.</li>
                    <li>The stability of the medicines.</li>
                </ul>
            </div>

            <div className="book py-4">
                {
                    currentUser ? <>
                        <h4>Place an Online Order !</h4>
                        <div className='border p-3 rounded'>
                            <h5>Option 1</h5>
                            <p>Upload Your Prescription (Easyest way to order)</p>
                            <form>
                                <h6 className="username">Customer Name: {currentUser?.displayName}</h6>
                                <input type="file" />
                                <br />
                                <Button className='my-3 px-5'>Place Order</Button>
                            </form>
                        </div>
                        <br />
                        <div className='border p-3 rounded'>
                            <h5>Option 2</h5>
                            <p>Choose medicines yourself</p>
                            <form onSubmit={handleAddItem}>
                                <h6 className="username">Customer Name: {currentUser?.displayName}</h6>
                                <div className="row">
                                    <div className='col-md-6 col-xl-4'>
                                        <label htmlFor="medicine">Medicine Name</label>
                                        <br />
                                        <select name="medicine" id='medicine' className='px-4 py-1 rounded w-100'>
                                            <option value="0">---Select----</option>
                                            <option value="Paracitamol-500">Paracitamol-500</option>
                                            <option value="Maxpr">Maxpr</option>
                                            <option value="aic">aic</option>
                                            <option value="cefradin">cefradin</option>
                                            <option value="hab">hab</option>
                                            <option value="aiimsk">aiimsk</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 col-xl-4">
                                        <label htmlFor="medicineQuantity">Quantity</label>
                                        <br />
                                        <select name="medicineQuantity" id='medicineQuantity' className='px-4 py-1 rounded w-100'>
                                            <option value="0">---Select----</option>
                                            <option value="1">1</option>
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                        </select>
                                    </div>
                                </div>
                                <Button type='sumbit' className='my-3 px-5'>Add Item</Button>
                            </form>
                            {medItems.length === 0 ? <p>Add items to see here</p>
                                :
                                <>
                                    <p className='m-0'>Added Items: </p>
                                    <ul className='ps-3'>
                                        {
                                            medItems?.map((item, i) => <li key={i}>{item.medicine} = {item.medicineQuantity}</li>)
                                        }
                                    </ul>
                                </>
                            }
                            <Button className='my-1 px-5'>Place Order</Button>
                        </div>
                    </>
                        :
                        <p>Please <button onClick={handleShow} className='btn border text-success'>Login</button> to place a online order</p>
                }

            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login></Login>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MedicineShop;