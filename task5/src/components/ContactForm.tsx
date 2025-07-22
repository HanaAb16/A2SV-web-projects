import { DevTool } from '@hookform/devtools'
import { useForm } from 'react-hook-form'

type formValues = {
    name : string
    email : string
    message : string
}
export const ContactForm = () => {
    const form = useForm<formValues>()
    const { register , control , handleSubmit , formState } = form
    const { errors } = formState

    const onSubmit = (data: formValues) => {
        console.log("Form submitted" , data)
        form.reset()
    }
   
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                id="name" 
                {...register("name", {
                    required: {
                        value: true ,
                        message: 'Name is required',
                    } 
                })} />
                <p className='error'>{errors.name?.message}</p>

                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                id="email" 
                {...register("email" , {
                    required: {
                        value: true , 
                        message: 'Email is required' 
                    } ,
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ , 
                        message: 'Invalid email adress'
                    }
                })} />
                <p className='error'>{errors.email?.message}</p>

                <label htmlFor="message">Message</label>
                <textarea 
                id="message" 
                {...register("message" , {
                    required: 'Message is required'
                })} ></textarea> 
                <p className='error'>{errors.message?.message}</p>
                <button type="submit">Submit</button>
            </form>
            <DevTool control = {control} />
        </div>
    );
};