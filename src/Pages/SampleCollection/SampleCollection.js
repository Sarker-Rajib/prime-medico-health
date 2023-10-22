import React from 'react';
import toast from 'react-hot-toast';

const SampleCollection = () => {

    const confirmBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const message = name + ' Your Booking Succesfully Done'
        toast.success(message)
    }

    return (
        <div className='container' style={{ padding: '50px 0' }}>
            <h1 className="section-header">Home Service</h1>
            <p>
                Welcome to our Home Service Lab Sample Collection! We understand that your health is of utmost importance, and we're here to make it easier for you. Our team of experienced professionals is dedicated to providing convenient and reliable sample collection services right at your doorstep. Whether you need blood tests, urine samples, or any other diagnostic tests, we've got you covered. Say goodbye to long waits at crowded clinics and hello to a hassle-free experience. Schedule your sample collection today and take the first step towards a healthier, happier you. Your well-being is our priority, and we're here to bring healthcare to your home.
            </p>
            <br />
            <h2 className="section-header fs-5">Make your Booking</h2>

            <form onSubmit={confirmBooking}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <input type="text" name='name' className="form-control" placeholder='Youn Name' required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input type="text" className="form-control" placeholder='Contact Number' required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input type="text" className="form-control" placeholder='Mail' />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input type="text" className="form-control" placeholder='Address' required />
                    </div>
                    <div className='mb-3'>
                        <label className='mb-1'>Service Detail :</label>
                        <textarea name="service" className='form-control' rows="6"></textarea>
                    </div>
                    <div className='mb-3 col-md-6'>
                        <label className='mb-1'>Upload Advice paper :</label>
                        <input type="file" className='form-control' required />
                    </div>
                    <div className='text-center my-3'>
                        <input type="submit" className='btn px-5 py-2 border text-white fs-5' value={'Confirm Booking'} style={{ background: 'rgb(2 179 179)' }} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SampleCollection;