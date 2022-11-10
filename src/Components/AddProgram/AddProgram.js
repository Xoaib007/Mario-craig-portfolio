import React from 'react';
import { Form, useLoaderData} from 'react-router-dom';

const AddProgram = () => {
    document.title = "Add";
    const existingPrograms = useLoaderData();

    const handleNewProgram = e =>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const price = form.price.value;
        const duration = form.duration.value;
        const daily = form.daily.value;
        const goal = form.goal.value;
        const experience = form.experience.value;
        const details = form.description.value;
        const id=  existingPrograms.length + 1;
        const img= form.img.value

        const program= {
            name: name,
            img: img,
            price: price,
            duration: duration,
            daily: daily,
            goal: goal,
            experience: experience,
            details: details,
            programid: id,
        }

        fetch('https://mario-craig-server.vercel.app/programs', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(program)
        })

        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('New program posted successfully')
            }
            else{
                alert('Post unsuccessfull. check the given data is correct');
                form.reset()
            }
        })
        .catch(error => console.error(error))
    }
    return (
        <Form onSubmit={handleNewProgram} name='form' className='mb-20'>
            <div className='align w-fit px-4 flex flex-row mx-auto border-x-8 border-white my-10'>
                <p className='text-2xl font-bold text-orange-600'>Add A New Fitness Program</p>
            </div>
            <div className='w-4/12 mx-auto'>
                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text text-white">Program Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Name (7 charecter max)" className="input bg-transparent input-primary input-bordered" required />
                </div>

                <div className='flex justify-between  mb-5'>
                    <div className="form-control mr-5">
                        <label className="label">
                            <span className="label-text text-white">$Price</span>
                        </label>
                        <input name='price' type="text" placeholder="Price" className="input bg-transparent input-primary input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Program cover image</span>
                        </label>
                        <input name='imgFile' type="file" className="file-input file-input-bordered bg-transparent file-input-primary w-full max-w-xs" />
                    </div>
                </div>

                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text text-white">Image URL</span>
                    </label>
                    <input name='img' type="text" placeholder="Put your image url here" className="input bg-transparent input-primary input-bordered" />
                </div>

                <div className='flex justify-between  mb-5'>
                    <div className="form-control w-10/12 mr-2">
                        <label className="label">
                            <span className="label-text text-white">Duration of your program</span>
                        </label>
                        <input name='duration' type="text" placeholder="Duration (in days)" className="input bg-transparent input-primary input-bordered" required />
                    </div>

                    <div className="form-control w-10/12 ml-3">
                        <label className="label">
                            <span className="label-text text-white">Minimum time in a day</span>
                        </label>
                        <input name='daily' type="text" placeholder="Daily minimum (in minute)" className="input bg-transparent input-primary input-bordered" required />
                    </div>
                </div>

                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text text-white">Experience level:</span>
                    </label>
                    <input name='experience' type="text" placeholder="Experience" className="input bg-transparent input-primary input-bordered" required />
                </div>

                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text text-white">Goal of your program:</span>
                    </label>
                    <input name='goal' type="text" placeholder="Main purpose of this program" className="input bg-transparent input-primary input-bordered" required />
                </div>

                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text text-white">Program Description:</span>
                    </label>
                    <textarea name='description'  type="text" className="textarea textarea-bordered border-primary bg-transparent h-48" placeholder='Details' required />
                </div>

                <div className="form-control w-6/12 mx-auto mt-10">
                    <input type='submit' value='Post' className="btn btn-primary hover:bg-orange-600 hover:font-bold hover:text-xl hover:border-tranparent" />
                </div>
            </div>
        </Form>
    );
};

export default AddProgram;